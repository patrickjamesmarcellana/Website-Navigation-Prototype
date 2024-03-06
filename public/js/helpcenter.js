var previouslySelected;
var paths = 1;

var timePageOpened = null; // set once page is loaded
var pageStayTimes = [];
var avgTimeSpentPerPage = 0;

// set initial time clicked
$(window).on("load", (e) => {
    timePageOpened = e.timeStamp;
});

$(".menu").click(async (e) => {
    // selected menu
    const selectedMenu = e.target;
    const selectedMenuId = selectedMenu.getAttribute("menu-id");
    let response = await fetch("/getMenu/" + selectedMenuId);
    if (response.status == 400) {
        console.log("Error in fetching selected menu data from database.");
        return;
    }
    const selectedMenuData = await response.json();

    // previously selected menu
    let previouslySelectedId, previouslySelectedData;
    if (previouslySelected) {
        previouslySelectedId = previouslySelected.getAttribute("menu-id");
        response = await fetch("/getMenu/" + previouslySelectedId);
        if (response.status == 400) {
            console.log(
                "Error in fetching previously selected menu data from database."
            );
            return;
        }
        previouslySelectedData = await response.json();
    }

    console.log("Selected ID: " + selectedMenuId);
    console.log("Selected Parent: " + selectedMenuData.parentMenu);
    console.log("Previous Selected ID: " + previouslySelectedId);

    // FIXME: check if it is a leaf properly
    // check if new page is clicked
    if (
        previouslySelectedId !== selectedMenuId &&
        selectedMenuData.nestLevel === 3 /* HACK */
    ) {
        console.log("Clicked leaf at", e.timeStamp, "ms elapsed");
        pageStayTimes.push(e.timeStamp - timePageOpened);
        console.log("Times spent in pages", pageStayTimes);
        avgTimeSpentPerPage =
            pageStayTimes.reduce(
                (runningTotal, currentValue) => runningTotal + currentValue,
                0
            ) / pageStayTimes.length;
        console.log(
            "Average length of stay in a page is now:",
            avgTimeSpentPerPage,
            "ms"
        );

        // TODO (IMPORTANT): set this when page is actually done rendering instead?
        timePageOpened = e.timeStamp;
    }

    // if selected menu is already expanded, hide its submenus (not grandchildren)
    if (selectedMenu.classList.contains("expanded")) {
        for (subMenu of selectedMenu.children) {
            subMenu.classList.add("hidden");
        }
        selectedMenu.classList.remove("expanded");
        return;
    }

    // display selected menu's hidden submenus if there are any
    if (selectedMenu.firstElementChild) {
        for (subMenu of selectedMenu.children) {
            subMenu.classList.remove("hidden");
        }
        selectedMenu.classList.add("expanded");

        // update paths (backtracking) count
        if (
            previouslySelected && // defensive, displaying hidden submenus should not happen on initial state (i.e., no menu clicked yet at all)
            !selectedMenuData.isLeaf &&
            previouslySelectedId !== selectedMenuId && // opening, closing, opening the same menu consecutively should not increase path count
            selectedMenuData.parentMenu !==
                previouslySelected.getAttribute("menu-id") // clicked menu's parent is the previously clicked menu means the same path
        ) {
            if (
                (selectedMenuData.nestLevel ===
                    previouslySelectedData.nestLevel &&
                    selectedMenuData.parentMenu ===
                        previouslySelectedData.parentMenu) ||
                selectedMenuData.parentMenu !==
                    previouslySelectedData.parentMenu
            ) {
                paths += 1;
            }
        }

        console.log("Path count: " + paths);
        previouslySelected = selectedMenu;
        return;
    }

    // TODO: change this to use random leaf node's name at runtime
    if (selectedMenu.textContent.trim() == "Change name") {
        document.querySelector("#doneBtn").classList.remove("hidden");
    }

    // first time accessing the menu and its submenus; add them as menu's children
    response = await fetch("/getSubMenus/" + selectedMenuId);
    console.log(response.status);

    if (response.status === 200) {
        const subMenus = await response.json();
        console.log(subMenus);
        for (const subMenu of subMenus) {
            const newSubMenu = `<div id="${subMenu.divId}" menu-id="${subMenu.menuId}" class="menu cursor-pointer box-border space-y-[${subMenu.spaceBetween}px] pl-[${subMenu.leftPadding}px]">
                ${subMenu.name}
            </div>`;

            selectedMenu.innerHTML += newSubMenu;
        }

        // add expanded class to prevent adding the submenus again
        selectedMenu.classList.add("expanded");

        // update paths (backtracking) count
        if (
            previouslySelected && // defensive, displaying hidden submenus should not happen on initial state (i.e., no menu clicked yet at all)
            !selectedMenuData.isLeaf && // clicking on leaves does not continue or open a path
            previouslySelectedId !== selectedMenuId && // opening, closing, opening the same menu consecutively should not increase path count
            selectedMenuData.parentMenu !==
                previouslySelected.getAttribute("menu-id") // clicked menu's parent is the previously clicked menu means the same path
        ) {
            console.log("PASSED HERE");
            if (
                (selectedMenuData.nestLevel ===
                    previouslySelectedData.nestLevel &&
                    selectedMenuData.parentMenu ===
                        previouslySelectedData.parentMenu) ||
                selectedMenuData.parentMenu !==
                    previouslySelectedData.parentMenu
            ) {
                paths += 1;
            }
        }

        console.log("Path count: " + paths);
        previouslySelected = selectedMenu;
        return;
    }
});

$("#doneBtn").click(async (e) => {
    window.location.replace(
        `/done?paths=${paths}&avgTime=${avgTimeSpentPerPage.toFixed(2)}`
    );
});
