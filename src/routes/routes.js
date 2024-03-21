import express from "express";
const router = express.Router();
import { connect, disconnect } from "../models/db.js";
import Menu from "../models/menu.js";

const menusToJson = async (documents) => {
    const json = [];

    for (let i = 0; i < documents.length; i++) {
        json.push(await menuToJson(documents[i]));
    }

    return json;
};

const menuToJson = async (document) => {
    console.log(document);
    return {
        menuId: document._id,
        name: document.name,
        divId: document.name.replace(/ +/g, ""),
        leftPadding: 0,
        spaceBetween: 0, // change also below and in menu.js
    };
};

router.get("/", async (req, res) => {
    await connect();
    let randomPrompt = await Menu.aggregate([
        { $match: { isLeaf: true } },
        { $sample: { size: 1 } },
    ]);
    randomPrompt = randomPrompt[0];
    await disconnect();

    res.render("index", {
        title: "Website Navigation Test",
        script: "static/js/index.js",
        prompt: randomPrompt,
    });
});

router.get("/helpcenter", async (req, res) => {
    let prompt;
    try {
        await connect();

        const query = await Menu.find({ nestLevel: 1 });
        var initialMenus = await menusToJson(query);
        console.log(initialMenus);

        const promptId = atob(req.query["pid"]);
        prompt = await Menu.findOne({ _id: promptId });
    } catch (err) {
        console.error(err);
    }

    try {
        await disconnect();
    } catch (err) {
        console.error(err);
    }

    res.render("helpcenter", {
        title: "Navigation Prototype",
        script: "static/js/helpcenter.js",
        menus: initialMenus,
        promptName: prompt.name,

        fontSize: 17, // prototype variable 1
        spaceBetween: 0, // prototype variable 2; change also in menu.js
    });
});

router.get("/done", async (req, res) => {
    res.render("done", {
        paths: req.query.paths,
        avgTime: req.query.avgTime,
    });
});

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    });
});

export { router };
