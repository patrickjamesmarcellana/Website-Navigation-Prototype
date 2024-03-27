const SPACEBETWEEN = 10 // variable 2, also change in routes.js

const subMenusToJson = async (documents) => {
    const json = []
    
    for(let i = 0; i < documents.length; i++) {
        json.push(await subMenusToJson(documents[i]))
    }

    return json
}

const subMenuToJson = async (document) => {
    console.log(document)
    return {
        menuId: document._id,
        name: document.name,
        divId: document.name.replace(/ +/g, ""),
        leftPadding: 20,
        spaceBetween: SPACEBETWEEN,

        parentMenu: document.parentMenu,
        nestLevel: document.nestLevel,
        isLeaf: document.isLeaf
    }
}

export { subMenusToJson, subMenuToJson };