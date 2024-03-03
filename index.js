import express from "express"
import exphbs from "express-handlebars"
import "dotenv/config"

// express app
const app = express()

// make public folder static
app.use("/static", express.static("public"))

// from this point onward, we are going to receive json format data
// app.use(express.json());
app.use(express.urlencoded({extended: true}));

// import and use routers
import { router } from "./src/routes/routes.js"
app.use("", router)

// {extname: 'hbs'} informs the handlebars engine that the file extension to read is .hbs
app.engine("hbs", exphbs.engine({extname: 'hbs'}))

// set express' default file extension for views as .hbs
app.set("view engine", "hbs");

// set the directory for the views
// the views folder can be set with app.set("views", <path>)
app.set("views", "./src/views");

// the layout directory can be changed as part of the configuration of the exphbs.engine
// Example: exphbs.engine({layoutsDir: <path>})
// the default layout filename (main.hbs) can also be changed in the config through the defaultLayout property
exphbs.engine({layoutsDir:'./src/views/layouts'})
exphbs.engine({defaultLayout:'main'})

// handle access of error website paths
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendStatus(400)
    next()
})

// listen to port
app.listen(process.env.PORT, () => {
    console.log(`Website Testing Interface now listening to port ${process.env.PORT}`)
})