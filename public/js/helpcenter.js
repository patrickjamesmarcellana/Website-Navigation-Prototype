$("#UsingFacebook").click((e) => {
    console.log("Success")
    $("#yourProfile").removeClass("hidden")
})

$("#yourProfile").click((e) => {
    $("#addAndEdit").removeClass("hidden")
})

$("#addAndEdit").click((e) => {
    $("#targetPage").removeClass("hidden")
})

$("#doneBtn").click((e) => {
    window.location.replace("done.html")
})

