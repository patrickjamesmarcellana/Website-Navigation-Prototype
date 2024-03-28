import express from "express";
const router = express.Router();
import { connect, disconnect } from "../models/db.js";
import Menu from "../models/menu.js";
import Data from "../models/data.js";
import { subMenuToJson } from "./utils.js";

const controlledPromptsIds = [
    "6605806616be3b54ab8803c4", // Adjust how ads on Facebook are shown to you based on your Activity Information from ad partners
    "6605806e16be3b54ab880532", // Add or remove the Facebook buy and sell feature set in your Facebook group
    "6605806716be3b54ab8803e2", // Control who Facebook can suggest your profile to based on your email address or phone number
    "6605806616be3b54ab8803b6", // I’m receiving email or text notifications about a Facebook account that doesn’t belong to me.
    "6605807316be3b54ab8805fe", // How do I use text messages (SMS) for two-factor authentication on Facebook?
    "6605806b16be3b54ab88049c", // Troubleshoot problems with your camera, microphone or speakers for video calling on Facebook
    "6605806916be3b54ab88045a", // How to request information about an account that was impersonating you on Facebook
]

const menusToJson = async (documents, spaceBetween) => {
    const json = [];

    for (let i = 0; i < documents.length; i++) {
        json.push(await menuToJson(documents[i], spaceBetween));
    }

    return json;
};

const menuToJson = async (document, spaceBetween) => {
    return {
        menuId: document._id,
        name: document.name,
        divId: document.name.replace(/ +/g, ""),
        leftPadding: 0,
        spaceBetween: spaceBetween, // change also below and in menu.js
    };
};

const dataToJson = async (documents) => {
    const json = []

    for (let i = 0; i < documents.length; i++) {
        json.push(await dataRowToJson(documents[i]));
    }

    return json;
}

const dataRowToJson = async (document) => {
    console.log(document);
    return {
        date: document.date.toLocaleString('en-US'),
        participantName: document.participantName,
        prompt: document.prompt,
        fontSize: document.fontSize,
        spaceBetweenMenus: document.spaceBetweenMenus, 
        subsectionsCount: document.subsectionsCount,
        pathCount: document.pathCount,
        aveTimeSpent: document.aveTimeSpent,
        totalTimeSpent: document.totalTimeSpent,
    };
};

router.get("/", async (req, res) => {
    res.render("landing", {
        title: "Website Navigation Test"
    })
})

router.get("/prompt", async (req, res) => {
    console.log("Reached prompt router")
    await connect();
    console.log("Connected to DB in prompt router")

    /* Randomized Prompts Version */ 

    // let randomNode;
    // while(!randomNode?.isLeaf) {
    //     console.log("Entered loop in prompt router")
    //     randomNode = (await Menu.aggregate([
    //         {
    //             $match: {
    //                 parentMenu: randomNode?._id ?? null /* find null (aka top-level menus) initally */,
    //                 order: { $lte: parseInt(req.query.subsections) },
    //             },
    //         },
    //         { $sample: { size: 1 } },
            
    //     ]))[0];
    //     if(!randomNode) {
    //         break;
    //     }
    //     console.log(randomNode)
    // }
    // console.log("Found leaf")

    /* Controlled Prompts Version */
    const promptNoInt = parseInt(req.query.promptNumber)
    const prompt = await Menu.findById(controlledPromptsIds[promptNoInt - 1])
    const json = await menuToJson(prompt, null)
    console.log(json)
    await disconnect();

    console.log("Disconnected from DB")

    console.log(req.query.subsections)
    res.render("index", {
        title: "Website Navigation Test",
        // script: "static/js/index.js",
        // prompt: randomNode,
        prompt: json,
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
            totalTimeSpent: req.query.totalTime,
            rawData: req.query.rawData,
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
});

router.get("/complete", async (req, res) => {
    let json = {}
    try {
        await connect();

        const query = await Data.find({participantName: req.query.participantName}).sort({ _id: -1 }).limit(7);
        json = await dataToJson(query)
        console.log(json)
    } catch (err) {
        console.error(err);
    }

    res.render("done", {
        data: json
    });
})

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    });
});

export { router };
