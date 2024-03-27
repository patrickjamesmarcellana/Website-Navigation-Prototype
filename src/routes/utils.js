const SPACEBETWEEN = 10 // variable 2, also change in routes.js

const subMenusToJson = async (documents, spaceBetween) => {
    const json = []
    
    for(let i = 0; i < documents.length; i++) {
        json.push(await subMenuToJson(documents[i], spaceBetween))
    }

    return json
}

const subMenuToJson = async (document, spaceBetween) => {
    console.log(document)
    return {
        menuId: document._id,
        name: document.name,
        divId: document.name.replace(/ +/g, ""),
        leftPadding: 20,
        spaceBetween: spaceBetween,

        parentMenu: document.parentMenu,
        nestLevel: document.nestLevel,
        isLeaf: document.isLeaf
    }
}

export { subMenusToJson, subMenuToJson };