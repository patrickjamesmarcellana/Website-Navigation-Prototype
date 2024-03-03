const router = require("express").Router()
const path = require('path')

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
})

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    })
})

module.exports = router