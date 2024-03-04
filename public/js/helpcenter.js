// $("#UsingFacebook").click((e) => {
//     console.log("Success")
//     $("#yourProfile").removeClass("hidden")
// })

$("#yourProfile").click((e) => {
    $("#addAndEdit").removeClass("hidden")
})

$("#addAndEdit").click((e) => {
    $("#targetPage").removeClass("hidden")
})

$("#doneBtn").click((e) => {
    window.location.replace("done.html")
})

$(".menu").click(async (e) => {
    const selectedMenuId = e.currentTarget.closest(".menu").getAttribute("menu-id")
    const response = await fetch("/getMenu/" + selectedMenuId)
    console.log(response)
    const menu = (await response.json())[0]
    // console.log(response.json())
})
