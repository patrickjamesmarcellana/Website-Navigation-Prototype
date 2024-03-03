const express = require("express")
const exphbs = require("express-handlebars")
require('dotenv').config()

// express app
const app = express()

// make public folder static
app.use("/static", express.static("./public"))

// from this point onwards, we are going to receive json format data
app.use(express.json());

// import and use routers
const router = require("./src/routes/routes.js")
app.use("", router)

// handle access of error website paths
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendStatus(400)
    next()
})

// listen to port
app.listen(process.env.PORT, () => {
    console.log(`NewJeans app now listening to port ${process.env.PORT}`)
})