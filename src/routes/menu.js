import express from "express"
const menuRouter = express.Router()
import { connect, disconnect } from "../models/db.js"
import Menu from "../models/menu.js"
import menu from "../models/menu.js"

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
        leftPadding: (document.nestLevel - 1) * 25,
        spaceBetween: 20,

        parentMenu: document.parentMenu,
        nestLevel: document.nestLevel,
        isLeaf: document.isLeaf
    }
}

menuRouter.get("/getSubMenus/:menuId", async (req, res) => {
    console.log("Request for submenus by parent menu id", req.params.menuId)
    try {
        await connect()
        const menuToExpand = await Menu.find({_id: req.params.menuId})
        const subMenus = await Menu.find({parentMenu: menuToExpand})
        var json = await  menusToJson(subMenus)
        console.log(json)
    } catch (err) {
        console.error(err) 
    }

    try {
        await disconnect()
    } catch (err) {
        console.error(err)
    }

    if(json != null)
        res.send(json)
    else
        res.sendStatus(400)
})

menuRouter.get("/getMenu/:menuId", async (req, res) => {
    console.log("Request for menu by menu id", req.params.menuId)
    try {
        await connect()
        const menu = await Menu.findById(req.params.menuId)
        var json = await  menuToJson(menu)
        console.log(json)
    } catch (err) {
        console.error(err) 
    }

    try {
        await disconnect()
    } catch (err) {
        console.error(err)
    }

    if(json != null)
        res.send(json)
    else
        res.sendStatus(400)
})

export default menuRouter