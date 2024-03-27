import express from "express";
const router = express.Router();
import { connect, disconnect } from "../models/db.js";
import Menu from "../models/menu.js";
import Data from "../models/data.js";
import { subMenuToJson } from "./utils.js";

const menusToJson = async (documents, spaceBetween) => {
    const json = [];

    for (let i = 0; i < documents.length; i++) {
        json.push(await menuToJson(documents[i], spaceBetween));
    }

    return json;
};

const menuToJson = async (document, spaceBetween) => {
    console.log(document);
    return {
        menuId: document._id,
        name: document.name,
        divId: document.name.replace(/ +/g, ""),
        leftPadding: 0,
        spaceBetween: spaceBetween, // change also below and in menu.js
    };
};

router.get("/", async (req, res) => {
    res.render("landing", {
        title: "Website Navigation Test"
    })
})

router.get("/prompt", async (req, res) => {
    await connect();
    let randomPrompt = await Menu.aggregate([
        {
            $match: {
                isLeaf: true,
                order: { $lte: parseInt(req.query.subsections) },
            },
        },
        { $sample: { size: 1 } },
    ]);
    randomPrompt = randomPrompt[0];
    await disconnect();

    console.log(req.query.subsections)
    res.render("index", {
        title: "Website Navigation Test",
        // script: "static/js/index.js",
        prompt: randomPrompt,
        promptNumber: req.query.promptNumber,
        participantName: req.query.participantName,
    });
});

router.get("/helpcenter", async (req, res) => {
    let prompt, allData = {};
    try {
        await connect();

        const query = await Menu.find({ nestLevel: 1 });
        var initialMenus = await menusToJson(query, req.query.spaceBetween);
        console.log(initialMenus);

        const promptId = atob(req.query["pid"]);
        prompt = await Menu.findOne({ _id: promptId });

        const allDocuments = await Menu.find();
        for(const document of allDocuments) {
            allData[document._id] = await subMenuToJson(document, req.query.spaceBetween);
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
        // script: "static/js/helpcenter.js",
        scriptData: JSON.stringify(allData),
        menus: initialMenus,
        promptName: prompt.name,
        promptNumber: req.query.promptNumber,
        participantName: req.query.participantName,

        fontSize: req.query.fontSize,
        spaceBetween: req.query.spaceBetween,
    });
});

router.get("/done", async (req, res) => {
    let prompt;
    try {
        await connect();
        const promptId = atob(req.query["pid"]);
        prompt = await Menu.findOne({ _id: promptId });
        await Data.create({
            participantName: req.query.participantName,
            prompt: prompt.name,
            fontSize: req.query.fontSize,
            spaceBetweenMenus: req.query.spaceBetween, 
            subsectionsCount: req.query.subsections,
            pathCount: req.query.paths,
            aveTimeSpent: req.query.avgTime,
        })
    } catch (err) {
        console.error(err);
        res.sendStatus(500)
    }

    try {
        await disconnect();
    } catch (err) {
        console.error(err);
        res.sendStatus(500)
    }

    res.sendStatus(200)

    // res.render("done", {
    //     participantName: req.query.participantName,
    //     paths: req.query.paths,
    //     avgTime: req.query.avgTime,
    //     prompt: prompt.name,
    //     fontSize: req.query.fontSize,
    //     spaceBetween: req.query.spaceBetween,
    //     subsectionsCount: req.query.subsections,
    // });
});

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    });
});

export { router };
