$("#prompt").replaceWith("What happens to your Facebook profile if you pass away?")

$("#startButton").click((e) => {
    window.location.replace("help_center.html")
})

$("#usingFacebook").click((e) => {
    console.log("HI")
    $("#yourProfile").removeClass("hidden")
})