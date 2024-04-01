import express from "express"
const menuRouter = express.Router()
import { connect, disconnect } from "../models/db.js"
import Menu from "../models/menu.js"
import { subMenuToJson as menusToJson, subMenuToJson as menuToJson } from "./utils.js"

menuRouter.get("/getSubMenus/:menuId", async (req, res) => {
    console.log("Request for submenus by parent menu id", req.params.menuId)
    try {
        const menuToExpand = await Menu.find({_id: req.params.menuId})
        const subMenus = await Menu.find({parentMenu: menuToExpand})
        var json = await  menusToJson(subMenus, req.query.spaceBetween)
        console.log(json)
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
        const menu = await Menu.findById(req.params.menuId)
        var json = await  menuToJson(menu, req.query.spaceBetween)
        console.log(json)
    } catch (err) {
        console.error(err) 
    }

    if(json != null)
        res.send(json)
    else
        res.sendStatus(400)
})

export default menuRouter