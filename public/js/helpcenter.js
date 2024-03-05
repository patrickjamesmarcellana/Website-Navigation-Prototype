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
    const selectedMenu = e.target
    const selectedMenuId = selectedMenu.getAttribute("menu-id")
    console.log(selectedMenuId)
    const response = await fetch("/getMenu/" + selectedMenuId)
    console.log(response.status)

    if(response.status === 200) {
        const subMenus = await response.json()
        console.log(subMenus)
        for(const subMenu of subMenus) {
            const newSubMenu = 
            `<div id="${subMenu.divId}" menu-id="${subMenu.menuId}" class="menu cursor-pointer box-sizing pl-[${subMenu.leftPadding}px]">
                ${subMenu.name}
            </div>`

            selectedMenu.innerHTML += newSubMenu
        }
    }
})
