const router = require("express").Router()
const path = require('path')

router.get("/", (req, res) => {
    res.render("index", {
        title: "Website Navigation Test",
        script: "static/js/index.js"
    })
})

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    })
})

module.exports = router