import express from "express"
const router = express.Router()
import { connect, disconnect } from "../models/db.js"
import Menu from "../models/menu.js"

const menusToJson = async (documents) => {
    const json = []
    
    for(let i = 0; i < documents.length; i++) {
        json.push(await menuToJson(documents[i]))
    }

    return json
}

const menuToJson = async (document) => {
    console.log(document)
    return {
        name: document.name,
        divId: document.name.replace(/ +/g, ""),
        leftPadding: 0,

        bottomMargin: 20, // prototype variable 2
    }
}

router.get("/", (req, res) => {
    res.render("index", {
        title: "Website Navigation Test",
        script: "static/js/index.js",
        prompt: "Change name." // TODO: Randomize prompt by extracting data from arrays from file.
    })
})

router.get("/helpcenter", async (req, res) => {
    try {
        await connect()

        const query = await Menu.find({nestLevel:1})
        var initialMenus = await menusToJson(query)
        console.log(initialMenus)
    } catch (err) {
        console.error(err)
    }

    try {
        await disconnect()
    } catch (err) {
        console.error(err)
    }

    await res.render("helpcenter", {
        title: "Navigation Prototype",
        script: "static/js/helpcenter.js",
        menus: initialMenus,

        // prototype variables
        fontSize: 17, // prototype variable 1
    })
})

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    })
})

export { router }