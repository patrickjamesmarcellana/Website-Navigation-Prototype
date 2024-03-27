import express from "express";
const router = express.Router();
import { connect, disconnect } from "../models/db.js";
import Menu from "../models/menu.js";
import Data from "../models/data.js";
import { subMenuToJson } from "./utils.js";

const FONTSIZE = 17; // prototype variable 1
const SPACEBETWEEN = 10; // prototype variable 2; change also in menu.js
const SUBSECTIONS_VAR = 4; // prototype variable 3; change also in helpcenter.js
var PARTICIPANT_NAME = ""

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
        spaceBetween: SPACEBETWEEN, // change also below and in menu.js
    };
};

router.get("/", async (req, res) => {
    await connect();
    let randomPrompt = await Menu.aggregate([
        {
            $match: {
                isLeaf: true,
                order: { $lte: SUBSECTIONS_VAR },
            },
        },
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
    let prompt, allData = {};
    PARTICIPANT_NAME = req.query.participantName
    try {
        await connect();

        const query = await Menu.find({ nestLevel: 1 });
        var initialMenus = await menusToJson(query);
        console.log(initialMenus);

        const promptId = atob(req.query["pid"]);
        prompt = await Menu.findOne({ _id: promptId });

        const allDocuments = await Menu.find();
        for(const document of allDocuments) {
            allData[document._id] = await subMenuToJson(document);
        }
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
        scriptData: JSON.stringify(allData),
        menus: initialMenus,
        promptName: prompt.name,

        fontSize: FONTSIZE,
        spaceBetween: SPACEBETWEEN,
    });
});

router.get("/done", async (req, res) => {
    let prompt;
    try {
        await connect();

        const promptId = atob(req.query["pid"]);
        prompt = await Menu.findOne({ _id: promptId });
        await Data.create({
            participantName: PARTICIPANT_NAME,
            prompt: prompt.name,
            fontSize: FONTSIZE,
            spaceBetweenMenus: SPACEBETWEEN, 
            subsectionsCount: SUBSECTIONS_VAR,
            pathCount: req.query.paths,
            aveTimeSpent: req.query.avgTime,
        })
    } catch (err) {
        console.error(err);
    }

    try {
        await disconnect();
    } catch (err) {
        console.error(err);
    }

    res.render("done", {
        participantName: PARTICIPANT_NAME,
        paths: req.query.paths,
        avgTime: req.query.avgTime,
        prompt: prompt.name,
        fontSize: FONTSIZE,
        spaceBetween: SPACEBETWEEN,
        subsectionsCount: SUBSECTIONS_VAR,
    });
});

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    });
});

export { router };
