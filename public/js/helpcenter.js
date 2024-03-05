// $("#UsingFacebook").click((e) => {
//     console.log("Success")
//     $("#yourProfile").removeClass("hidden")
// })

// $("#yourProfile").click((e) => {
//     $("#addAndEdit").removeClass("hidden")
// })

// $("#addAndEdit").click((e) => {
//     $("#targetPage").removeClass("hidden")
// })

// $("#doneBtn").click((e) => {
//     window.location.replace("done.html")
// })

$(".menu").click(async (e) => {
    // e.stopPropagtation()
    const selectedMenu = e.target;

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
        return;
    }

    // first time accessing the menu and its submenus; add them as menu's children
    const selectedMenuId = selectedMenu.getAttribute("menu-id");
    console.log(selectedMenuId);
    const response = await fetch("/getMenu/" + selectedMenuId);
    console.log(response.status);

    if (response.status === 200) {
        const subMenus = await response.json();
        console.log(subMenus);
        for (const subMenu of subMenus) {
            const newSubMenu = `<div id="${subMenu.divId}" menu-id="${subMenu.menuId}" class="menu cursor-pointer box-sizing pl-[${subMenu.leftPadding}px]">
                ${subMenu.name}
            </div>`;

            selectedMenu.insertAdjacentHTML("beforeend", newSubMenu);
        }

        // add expanded class to prevent adding the submenus again
        selectedMenu.classList.add("expanded");
    }
});
