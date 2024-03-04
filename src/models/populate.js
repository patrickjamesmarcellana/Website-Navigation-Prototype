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
            // using facebook
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
        
        // populate nesting 3

        // using facebook
        try {
            // your profile
            var addAndEditYourProfile3 = await Menu.create({
                name: "Add and Edit Your Profile Info",
                parentMenu: yourProfile2,
                nestLevel: 3
            })
            await addAndEditYourProfile3.populate("parentMenu")

            var yourProfilePicture3 = await Menu.create({
                name: "Your Profile Picture and Cover Photo",
                parentMenu: yourProfile2,
                nestLevel: 3
            })
            await yourProfilePicture3.populate("parentMenu")

            var shareAndManagePosts3 = await Menu.create({
                name: "Share and Manage Posts on Your Profile",
                parentMenu: yourProfile2,
                nestLevel: 3
            })
            await shareAndManagePosts3.populate("parentMenu")

            // messaging 
            var sendMessages3 = await Menu.create({
                name: "Send Messages",
                parentMenu: messaging2,
                nestLevel: 3
            })
            await sendMessages3.populate("parentMenu")

            var viewAndManageMessages3 = await Menu.create({
                name: "View and Manage Messages",
                parentMenu: messaging2,
                nestLevel: 3
            })
            await viewAndManageMessages3.populate("parentMenu")

            var reportAMessage3 = await Menu.create({
                name: "Report a Message",
                parentMenu: messaging2,
                nestLevel: 3
            })
            await reportAMessage3.populate("parentMenu")

            var videoCalling3 = await Menu.create({
                name: "Video Calling",
                parentMenu: messaging2,
                nestLevel: 3
            })
            await videoCalling3.populate("parentMenu")

            // pages
            var createAndManageAPage3 = await Menu.create({
                name: "Create and Manage a Page",
                parentMenu: pages2,
                nestLevel: 3
            })
            await createAndManageAPage3.populate("parentMenu")

            var managePageSettings3 = await Menu.create({
                name: "Manage Page Settings",
                parentMenu: pages2,
                nestLevel: 3
            })
            await managePageSettings3.populate("parentMenu")

            var customizeAPage3 = await Menu.create({
                name: "Customize a Page",
                parentMenu: pages2,
                nestLevel: 3
            })
            await customizeAPage3.populate("parentMenu")

            var publishing3 = await Menu.create({
                name: "Publishing",
                parentMenu: pages2,
                nestLevel: 3
            })
            await publishing3.populate("parentMenu")

            // groups
            var postParticipate3 = await Menu.create({
                name: "Post, Participate, and Privacy",
                parentMenu: groups2,
                nestLevel: 3
            })
            await postParticipate3.populate("parentMenu")

            var createEngage3 = await Menu.create({
                name: "Create, Engage, and Manage Settings",
                parentMenu: groups2,
                nestLevel: 3
            })
            await createEngage3.populate("parentMenu")

            var managePeopleAndContent3 = await Menu.create({
                name: "Manage People and Content",
                parentMenu: groups2,
                nestLevel: 3
            })
            await managePeopleAndContent3.populate("parentMenu")

            var communityChats3 = await Menu.create({
                name: "Community Chats",
                parentMenu: groups2,
                nestLevel: 3
            })
            await communityChats3.populate("parentMenu")
        } catch (err) {
            console.error(err)
        }

        // managing your account

        try {
            // login and password
            var logIntoYourAccount3 = await Menu.create({
                name: "Log Into Your Account",
                parentMenu: loginAndPassword2,
                nestLevel: 3
            })
            await logIntoYourAccount3.populate("parentMenu")

            var changeYourPassword3 = await Menu.create({
                name: "Change Your Password",
                parentMenu: loginAndPassword2,
                nestLevel: 3
            })
            await changeYourPassword3.populate("parentMenu")

            var fixALoginProblem3 = await Menu.create({
                name: "Fix a Login Problem",
                parentMenu: loginAndPassword2,
                nestLevel: 3
            })
            await fixALoginProblem3.populate("parentMenu")

            var uploadingYourID3 = await Menu.create({
                name: "Uploading Your ID",
                parentMenu: loginAndPassword2,
                nestLevel: 3
            })
            await uploadingYourID3.populate("parentMenu")

            // account settings
            var adjustYourAccountSettings3 = await Menu.create({
                name: "Adjust Your Account Settings",
                parentMenu: accountSettings2,
                nestLevel: 3
            })
            await adjustYourAccountSettings3.populate("parentMenu")

            var connectToFacebookWithout3 = await Menu.create({
                name: "Connect to Facebook Without Data Charges",
                parentMenu: accountSettings2,
                nestLevel: 3
            })
            await connectToFacebookWithout3.populate("parentMenu")

            var yourUsername3 = await Menu.create({
                name: "Your Username",
                parentMenu: accountSettings2,
                nestLevel: 3
            })
            await yourUsername3.populate("parentMenu")

            var legacyContacts3 = await Menu.create({
                name: "Legacy Contacts",
                parentMenu: accountSettings2,
                nestLevel: 3
            })
            await legacyContacts3.populate("parentMenu")

            // notifications
            var pushEmailAndText3 = await Menu.create({
                name: "Push, Email, and Text Notifications",
                parentMenu: notifications2,
                nestLevel: 3
            })
            await pushEmailAndText3.populate("parentMenu")

            var chooseWhatYoureNotified3 = await Menu.create({
                name: "Choose What You're Notified About",
                parentMenu: notifications2,
                nestLevel: 3
            })
            await chooseWhatYoureNotified3.populate("parentMenu")

            var fixAProblem3 = await Menu.create({
                name: "Fix a Problem",
                parentMenu: notifications2,
                nestLevel: 3
            })
            await fixAProblem3.populate("parentMenu")

            // ad preferences
            var howAdsWork3 = await Menu.create({
                name: "How Ads Work on Facebook",
                parentMenu: adPreferences2,
                nestLevel: 3
            })
            await howAdsWork3.populate("parentMenu")

            var controlTheAds3 = await Menu.create({
                name: "Control the Ads You See",
                parentMenu: adPreferences2,
                nestLevel: 3
            })
            await controlTheAds3.populate("parentMenu")

            var yourInfoAndFacebook3 = await Menu.create({
                name: "Your Info and Facebook Ads",
                parentMenu: adPreferences2,
                nestLevel: 3
            })
            await yourInfoAndFacebook3.populate("parentMenu")

        } catch (err) {
            console.error(err) 
        }

        // privacy, safety, and security
        try {
            // your privacy
            var controlWhoCanSee3 = await Menu.create({
                name: "Control who can see what you share on Facebook",
                parentMenu: yourPrivacy2,
                nestLevel: 3
            })
            await controlWhoCanSee3.populate("parentMenu")

            var manageWhatYouveShared3 = await Menu.create({
                name: "Manage What You've Shared",
                parentMenu: yourPrivacy2,
                nestLevel: 3
            })
            await manageWhatYouveShared3.populate("parentMenu")

            var controlWhoCanFindYou3 = await Menu.create({
                name: "Control Who Can Find You",
                parentMenu: yourPrivacy2,
                nestLevel: 3
            })
            await controlWhoCanFindYou3.populate("parentMenu")

            // staying safe
            var abuseResources3 = await Menu.create({
                name: "Abuse Resources",
                parentMenu: stayingSafe2,
                nestLevel: 3
            })
            await abuseResources3.populate("parentMenu")

            var suicideAndSelfInjury3 = await Menu.create({
                name: "Suicide and Self-Injury Resources",
                parentMenu: stayingSafe2,
                nestLevel: 3
            })
            await suicideAndSelfInjury3.populate("parentMenu")

            var crisisResponse3 = await Menu.create({
                name: "Crisis Response",
                parentMenu: stayingSafe2,
                nestLevel: 3
            })
            await crisisResponse3.populate("parentMenu")

            var safetyResourcesForParents3 = await Menu.create({
                name: "Safety Resources for Parents",
                parentMenu: stayingSafe2,
                nestLevel: 3
            })
            await safetyResourcesForParents3.populate("parentMenu")

            // keeping your account secure


            // shopping safety
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

