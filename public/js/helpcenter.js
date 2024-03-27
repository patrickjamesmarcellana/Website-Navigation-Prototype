// prototype variable 3; change along with the variable in routes.js
// prototype variables
var FONTSIZE = 17;
var SPACEBETWEEN = 10;
var SUBSECTIONS_VAR = 4;

var trialCount = 1       // count of repetition per test
var promptIds = []
var fontSizes = []
var spacesBetween = []
var subsectionsCounts = []
var pathCounts = []
var aveTimes = []

// store a reference to the script tag that loaded this file
const scriptObject = document.currentScript;

// utils
const getSubMenus = async (id) => {
    const menuJson = JSON.parse(scriptObject.dataset["extradata"]);
    if(menuJson) {
        return Object.values(menuJson).filter((document) => document.parentMenu === id);
    } else { // fallback
        response = await fetch(`/getSubMenus/` + id + `?spaceBetween=${SPACEBETWEEN}`);
        if (response.status == 400) {
            console.log(
                "Error in fetching previously selected menu data from database."
            );
            return;
        }
        return response.json();
    }
}

const getMenu = async (id) => {
    const menuJson = JSON.parse(scriptObject.dataset["extradata"]);
    if(menuJson && menuJson[id]) {
        return menuJson[id];
    } else { // fallback
        response = await fetch(`/getMenu/` + id + `?spaceBetween=${SPACEBETWEEN}`);
        if (response.status == 400) {
            console.log(
                "Error in fetching previously selected menu data from database."
            );
            return;
        }
        return response.json();
    }
}

var previouslySelected;
var paths = 0;

var timePageOpened = null; // set once page is loaded
var pageStayTimes = [];
var avgTimeSpentPerPage = 0;

const url = new URL(window.location.href);
const randomPromptId = atob(url.searchParams.get("pid"));

// set initial time clicked
$(window).on("load", (e) => {
    timePageOpened = e.timeStamp;
});

/*
path counting idea:
maintain a stack of clicked menus (deepest menu entry clicked M and all of its ancestors)

1. clicking a child of M adds it to the stack, it will then be the newest deepest entry
2. clicking an ancestor of M does not change the stack (nothing is popped) nor the count
2.1. reclicking on M or its other ancestors also does not change anything
2.2. clicking on anything else such as the sibling of M increases the count by 1, and then updates the stack to store N and its ancestors
3. basucally clicking on anything (say node N) not currently stored in the stack increases the count by 1, and then updates the stack to store N and its ancestors instead
*/
let clickStack = [];
$(".menu").click(async (e) => {
    // selected menu
    const selectedMenu = e.target;
    const selectedMenuId = selectedMenu.parentElement.getAttribute("menu-id");
    if (!selectedMenuId) {
        return;
    }
    
    const selectedMenuData = await getMenu(selectedMenuId);   

    // previously selected menu
    let previouslySelectedId, previouslySelectedData;
    if (previouslySelected) {
        previouslySelectedId =
            previouslySelected.parentElement.getAttribute("menu-id");
        
        previouslySelectedData = await getMenu(previouslySelectedId);
    }

    console.log("Selected ID: " + selectedMenuId);
    console.log("Selected Parent: " + selectedMenuData.parentMenu);
    console.log("Previous Selected ID: " + previouslySelectedId);

    // check if new page is clicked
    if (selectedMenuData.isLeaf) {
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

    // update path count
    // more info about this above (in "path counting idea")
    if(!selectedMenuData.isLeaf) { // clicking on leaves does not continue or open a path 
        if(!clickStack.includes(selectedMenuId)) { // check condition #2 (ensure it is not deepest clicked node or its ancestor)
            // find relation between the deepest clicked node and current menu entry
            let curNode = selectedMenuData;
            let isDescendantOfDeepest = false;
            const ancestors = [selectedMenuId];
            while(curNode?.parentMenu) {
                console.log(clickStack, curNode);
                if(clickStack.length > 0 && clickStack.at(-1) === curNode.parentMenu) {
                    isDescendantOfDeepest = true;
                    break;
                }
                ancestors.push(curNode.parentMenu);
                curNode = await getMenu(curNode.parentMenu);
            }

            if(!isDescendantOfDeepest) { // is not the deepest clicked node nor its ancestor/descendant, this is a new path
                // increment by 1 and create new click stack
                paths += 1;
                clickStack = ancestors.reverse();
            } else { // descendant of the current deepest clicked node (an even deeper node)
                // add the elements between the deepest clicked node and the current node
                // effectively designating a new deepest clicked node
                clickStack = clickStack.concat(ancestors.reverse());
            }
        }
    }
    console.log("Path count: " + paths);

    // display selected menu's hidden submenus if there are any
    if (selectedMenu.firstElementChild) {
        for (subMenu of selectedMenu.children) {
            subMenu.classList.remove("hidden");
        }
        selectedMenu.classList.add("expanded");

        // update paths (backtracking) count
        /*
        if (
            previouslySelected && // defensive, displaying hidden submenus should not happen on initial state (i.e., no menu clicked yet at all)
            !selectedMenuData.isLeaf &&
            previouslySelectedId !== selectedMenuId && // opening, closing, opening the same menu consecutively should not increase path count
            selectedMenuData.parentMenu !==
                previouslySelected.parentElement.getAttribute("menu-id") // clicked menu's parent is the previously clicked menu means the same path
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
        */
    }

    if (selectedMenu.parentElement.getAttribute("menu-id") === randomPromptId) {
        document.querySelector("#doneBtn").classList.remove("hidden");
    }

    // first time accessing the menu and its submenus; add them as menu's children
    const subMenus = await getSubMenus(selectedMenuId);
    const subsectionsCount = Math.min(subMenus.length, SUBSECTIONS_VAR);
    console.log(subMenus);
    for (i = 0; i < subsectionsCount; i++) {
        if (i === 0) {
            const subMenu = subMenus[i];

            const newSubMenu = `<div id="${subMenu.divId}" menu-id="${subMenu.menuId}" class="menu cursor-pointer box-border pb-[${subMenu.spaceBetween}px] mt-[${subMenu.spaceBetween}px] pl-[${subMenu.leftPadding}px]">
                <span class="[&:not(:has(:hover))]:hover:bg-gray-400">${subMenu.name}</span>
            </div>`;

            selectedMenu.innerHTML += newSubMenu;
        } else {
            const subMenu = subMenus[i];

            const newSubMenu = `<div id="${subMenu.divId}" menu-id="${subMenu.menuId}" class="menu cursor-pointer box-border pb-[${subMenu.spaceBetween}px] pl-[${subMenu.leftPadding}px]">
                <span class="[&:not(:has(:hover))]:hover:bg-gray-400">${subMenu.name}</span>
            </div>`;

            selectedMenu.innerHTML += newSubMenu;
        }
    }

    // add expanded class to prevent adding the submenus again
    selectedMenu.classList.add("expanded");

    // update paths (backtracking) count
    /*
    if (
        previouslySelected && // defensive, displaying hidden submenus should not happen on initial state (i.e., no menu clicked yet at all)
        !selectedMenuData.isLeaf && // clicking on leaves does not continue or open a path
        previouslySelectedId !== selectedMenuId && // opening, closing, opening the same menu consecutively should not increase path count
        selectedMenuData.parentMenu !==
            previouslySelected.parentElement.getAttribute("menu-id") // clicked menu's parent is the previously clicked menu means the same path
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
    */

    previouslySelected = selectedMenu;
    return;
});

$("#doneBtn").click(async (e) => {
    const participantName = $("#helpCenterParticipant").text()
    await fetch(
        `/done?paths=${paths}&avgTime=${avgTimeSpentPerPage.toFixed(2)}&pid=${btoa(randomPromptId)}&fontSize=${FONTSIZE}&spaceBetween=${SPACEBETWEEN}&subsections=${SUBSECTIONS_VAR}&participantName=${participantName}`
    );

    // save data for full display later
    promptIds[trialCount - 1] = randomPromptId
    fontSizes[trialCount - 1] = FONTSIZE
    spacesBetween[trialCount - 1] = SPACEBETWEEN
    subsectionsCounts[trialCount - 1] = SUBSECTIONS_VAR
    pathCounts[trialCount - 1] = paths
    aveTimes[trialCount - 1] = avgTimeSpentPerPage.toFixed(2)

    // modify parameters based on stage of test
    switch(trialCount) {
        case 1: break;                                          // 17 10 4
        case 2: FONTSIZE = 14; break;                           // 14 10 4
        case 3: FONTSIZE = 11; break;                           // 11 10 4
        case 4: FONTSIZE = 17; SPACEBETWEEN = 15; break;        // 17 15 4
        case 5: SPACEBETWEEN = 20; break;                       // 17 20 4
        case 6: SPACEBETWEEN = 10; SUBSECTIONS_VAR = 3; break;  // 17 10 3
        case 7: SUBSECTIONS_VAR = 2; break;                     // 17 10 2
        default: FONTSIZE = 17; SPACEBETWEEN = 10; SUBSECTIONS_VAR = 4; break;
    }

    if(trialCount != 8) {
        trialCount += 1
        window.location.replace(`/prompt?subsections=${SUBSECTIONS_VAR}&promptNumber=${trialCount}&participantName=${participantName}`)
    } else {
        console.log('DONE') // TODO: Done Page
    }
});

$("#nextButton").click((e) => {
    const participantName = $("#participantName").val()
    console.log(participantName)
    window.location.replace(`/prompt?subsections=${SUBSECTIONS_VAR}&promptNumber=${trialCount}&participantName=${participantName}`)
})

$("#startButton").click(async (e) => {
    const promptId = $("#random-prompt-id").text();
    const participantName = $("#promptParticipant").text()
    window.location.replace(`/helpcenter?pid=${btoa(promptId)}&fontSize=${FONTSIZE}&spaceBetween=${SPACEBETWEEN}&participantName=${participantName}`);
});
