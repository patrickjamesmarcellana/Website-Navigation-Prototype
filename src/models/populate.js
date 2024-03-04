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

        // using facebook
        try {
            var yourProfile2 = await Menu.create({
                name: "Your Profile",
                parentMenu: usingFacebook1,
                nestLevel: 2
            })
            await yourProfile2.populate("parentMenu")

            var messaging2 = await Menu.create({
                name: "Messaging",
                parentMenu: usingFacebook1,
                nestLevel: 2
            })
            await messaging2.populate("parentMenu")

            var pages2 = await Menu.create({
                name: "Pages",
                parentMenu: usingFacebook1,
                nestLevel: 2
            })
            await pages2.populate("parentMenu")

            var groups2 = await Menu.create({
                name: "Groups",
                parentMenu: usingFacebook1,
                nestLevel: 2
            })
            await groups2.populate("parentMenu")

            // managing your account
            var loginAndPassword2 = await Menu.create({
                name: "Login and Password",
                parentMenu: managingAccount1,
                nestLevel: 2
            })
            await loginAndPassword2.populate("parentMenu")

            var accountSettings2 = await Menu.create({
                name: "Account Settings",
                parentMenu: managingAccount1,
                nestLevel: 2
            })
            await accountSettings2.populate("parentMenu")

            var notifications2 = await Menu.create({
                name: "Notifications",
                parentMenu: managingAccount1,
                nestLevel: 2
            })
            await notifications2.populate("parentMenu")

            var adPreferences2 = await Menu.create({
                name: "Ad Preferences",
                parentMenu: managingAccount1,
                nestLevel: 2
            })
            await adPreferences2.populate("parentMenu")

            // privacy, safety, and security
            var yourPrivacy2 = await Menu.create({
                name: "Your Privacy",
                parentMenu: privacy1,
                nestLevel: 2
            })
            await yourPrivacy2.populate("parentMenu")

            var stayingSafe2 = await Menu.create({
                name: "Staying Safe",
                parentMenu: privacy1,
                nestLevel: 2
            })
            await stayingSafe2.populate("parentMenu")

            var keepingYourAccount2 = await Menu.create({
                name: "Keeping Your Account Secure",
                parentMenu: privacy1,
                nestLevel: 2
            })
            await keepingYourAccount2.populate("parentMenu")

            var shoppingSafety2 = await Menu.create({
                name: "Shopping Safety",
                parentMenu: privacy1,
                nestLevel: 2
            })
            await shoppingSafety2.populate("parentMenu")

            // policies and reporting
            var reportingAbuse2 = await Menu.create({
                name: "Reporting Abuse",
                parentMenu: policies1,
                nestLevel: 2
            })
            await reportingAbuse2.populate("parentMenu")

            var reportingAProblem2 = await Menu.create({
                name: "Reporting a Problem with Facebook",
                parentMenu: policies1,
                nestLevel: 2
            })
            await reportingAProblem2.populate("parentMenu")

            var australia2 = await Menu.create({
                name: "Australia Online Safety Act on Facebook",
                parentMenu: policies1,
                nestLevel: 2
            })
            await australia2.populate("parentMenu")

            var beingYourAuthentic2 = await Menu.create({
                name: "Being Your Authentic Self on Facebook",
                parentMenu: policies1,
                nestLevel: 2
            })
            await beingYourAuthentic2.populate("parentMenu")
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

