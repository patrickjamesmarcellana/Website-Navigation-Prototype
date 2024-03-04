import express from "express"
const menuRouter = express.Router()
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
        menuId: document._id,
        name: document.name,
        divId: document.name.replace(/ +/g, ""),
        leftPadding: 0,
    }
}

menuRouter.get("/getMenu/:menuId", async (req, res) => {
    console.log("Request for menu by id", req.params.menuId)


    res.sendStatus(500)
})

export { menuRouter }