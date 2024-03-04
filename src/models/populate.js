import { connect, disconnect } from "./db.js"
import mongoose from "mongoose"
import Menu from "./menu.js"

async function main() {
    try {
        await connect()

        const db = mongoose.connection

        // drop collection first
        try {
            await mongoose.connection.db.dropDatabase();
            console.log('facebook-help-center db dropped successfully.')
        } catch(err) {
            console.error(err)
        }
    
        // populate nesting 1
        try {
            var usingFacebook1 = await Menu.create({
                name: "Using Facebook",
                nestLevel: 1
            })
    
            var managingAccount1 = await Menu.create({
                name: "Managing Your Account",
                nestLevel: 1
            })
    
            var privacy1 = await Menu.create({
                name: "Privacy, Safety, and Security",
                nestLevel: 1
            })
    
            var policies1 = await Menu.create({
                name: "Policies and Reporting",
                nestLevel: 1
            })
        } catch (err) {
            console.error(err)
        }
    
        // populate nesting 2
        try {
            var yourProfile2 = await Menu.create({
                name: "Your Profile",
                parentMenu: usingFacebook1,
                nestLevel: 2
            })
            await yourProfile2.populate("parentMenu")
        } catch (err) {
            console.error(err)
        }
    
        console.log("facebook-help-center db repopulated successfully")
        
    } catch (err) {
        console.error(err)
        process.exit()
    }


    try {
        await disconnect()
    } catch (err) {
        console.error(err)
    }
}

main()

