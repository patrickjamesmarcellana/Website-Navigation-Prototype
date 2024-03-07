import { connect, disconnect } from "./db.js";
import mongoose from "mongoose";
import Menu from "./menu.js";

async function main() {
    try {
        await connect();

        const db = mongoose.connection;

        // drop collection first
        try {
            await mongoose.connection.db.dropDatabase();
            console.log("facebook-help-center db dropped successfully.");
        } catch (err) {
            console.error(err);
        }

        // populate nesting 1
        try {
            var usingFacebook1 = await Menu.create({
                name: "Using Facebook",
                nestLevel: 1,
                order: 1,
            });

            var managingAccount1 = await Menu.create({
                name: "Managing Your Account",
                nestLevel: 1,
                order: 2,
            });

            var privacy1 = await Menu.create({
                name: "Privacy, Safety, and Security",
                nestLevel: 1,
                order: 3,
            });

            var policies1 = await Menu.create({
                name: "Policies and Reporting",
                nestLevel: 1,
                order: 4,
            });
        } catch (err) {
            console.error(err);
        }

        // populate nesting 2

        try {
            // using facebook
            var yourProfile2 = await Menu.create({
                name: "Your Profile",
                parentMenu: usingFacebook1,
                nestLevel: 2,
                order: 1,
            });
            await yourProfile2.populate("parentMenu");

            var messaging2 = await Menu.create({
                name: "Messaging",
                parentMenu: usingFacebook1,
                nestLevel: 2,
                order: 2,
            });
            await messaging2.populate("parentMenu");

            var pages2 = await Menu.create({
                name: "Pages",
                parentMenu: usingFacebook1,
                nestLevel: 2,
                order: 3,
            });
            await pages2.populate("parentMenu");

            var groups2 = await Menu.create({
                name: "Groups",
                parentMenu: usingFacebook1,
                nestLevel: 2,
                order: 4,
            });
            await groups2.populate("parentMenu");

            // managing your account
            var loginAndPassword2 = await Menu.create({
                name: "Login and Password",
                parentMenu: managingAccount1,
                nestLevel: 2,
                order: 1,
            });
            await loginAndPassword2.populate("parentMenu");

            var accountSettings2 = await Menu.create({
                name: "Account Settings",
                parentMenu: managingAccount1,
                nestLevel: 2,
                order: 2,
            });
            await accountSettings2.populate("parentMenu");

            var notifications2 = await Menu.create({
                name: "Notifications",
                parentMenu: managingAccount1,
                nestLevel: 2,
                order: 3,
            });
            await notifications2.populate("parentMenu");

            var adPreferences2 = await Menu.create({
                name: "Ad Preferences",
                parentMenu: managingAccount1,
                nestLevel: 2,
                order: 4,
            });
            await adPreferences2.populate("parentMenu");

            // privacy, safety, and security
            var yourPrivacy2 = await Menu.create({
                name: "Your Privacy",
                parentMenu: privacy1,
                nestLevel: 2,
                order: 1,
            });
            await yourPrivacy2.populate("parentMenu");

            var stayingSafe2 = await Menu.create({
                name: "Staying Safe",
                parentMenu: privacy1,
                nestLevel: 2,
                order: 2,
            });
            await stayingSafe2.populate("parentMenu");

            var keepingYourAccount2 = await Menu.create({
                name: "Keeping Your Account Secure",
                parentMenu: privacy1,
                nestLevel: 2,
                order: 3,
            });
            await keepingYourAccount2.populate("parentMenu");

            var shoppingSafety2 = await Menu.create({
                name: "Shopping Safety",
                parentMenu: privacy1,
                nestLevel: 2,
                order: 4,
            });
            await shoppingSafety2.populate("parentMenu");

            // policies and reporting
            var reportingAbuse2 = await Menu.create({
                name: "Reporting Abuse",
                parentMenu: policies1,
                nestLevel: 2,
                order: 1,
            });
            await reportingAbuse2.populate("parentMenu");

            var reportingAProblem2 = await Menu.create({
                name: "Reporting a Problem with Facebook",
                parentMenu: policies1,
                nestLevel: 2,
                order: 2,
            });
            await reportingAProblem2.populate("parentMenu");

            var beingYourAuthentic2 = await Menu.create({
                name: "Being Your Authentic Self on Facebook",
                parentMenu: policies1,
                nestLevel: 2,
                order: 4,
            });
            await beingYourAuthentic2.populate("parentMenu");

            var hackedAndFakeAccounts2 = await Menu.create({
                name: "Hacked and Fake Accounts",
                parentMenu: policies1,
                nestLevel: 2,
                order: 3,
            });
            await hackedAndFakeAccounts2.populate("parentMenu");
        } catch (err) {
            console.error(err);
        }

        // populate nesting 3

        // using facebook
        try {
            // your profile
            var addAndEditYourProfile3 = await Menu.create({
                name: "Add and Edit Your Profile Info",
                parentMenu: yourProfile2,
                nestLevel: 3,
                order: 1,
            });
            await addAndEditYourProfile3.populate("parentMenu");

            var yourProfilePicture3 = await Menu.create({
                name: "Your Profile Picture and Cover Photo",
                parentMenu: yourProfile2,
                nestLevel: 3,
                order: 2,
            });
            await yourProfilePicture3.populate("parentMenu");

            var shareAndManagePosts3 = await Menu.create({
                name: "Share and Manage Posts on Your Profile",
                parentMenu: yourProfile2,
                nestLevel: 3,
                order: 3,
            });
            await shareAndManagePosts3.populate("parentMenu");

            // messaging
            var sendMessages3 = await Menu.create({
                name: "Send Messages",
                parentMenu: messaging2,
                nestLevel: 3,
                order: 1,
            });
            await sendMessages3.populate("parentMenu");

            var viewAndManageMessages3 = await Menu.create({
                name: "View and Manage Messages",
                parentMenu: messaging2,
                nestLevel: 3,
                order: 2,
            });
            await viewAndManageMessages3.populate("parentMenu");

            var reportAMessage3 = await Menu.create({
                name: "Report a Message",
                parentMenu: messaging2,
                nestLevel: 3,
                order: 3,
            });
            await reportAMessage3.populate("parentMenu");

            var videoCalling3 = await Menu.create({
                name: "Video Calling",
                parentMenu: messaging2,
                nestLevel: 3,
                order: 4,
            });
            await videoCalling3.populate("parentMenu");

            // pages
            var createAndManageAPage3 = await Menu.create({
                name: "Create and Manage a Page",
                parentMenu: pages2,
                nestLevel: 3,
                order: 1,
            });
            await createAndManageAPage3.populate("parentMenu");

            var managePageSettings3 = await Menu.create({
                name: "Manage Page Settings",
                parentMenu: pages2,
                nestLevel: 3,
                order: 2,
            });
            await managePageSettings3.populate("parentMenu");

            var customizeAPage3 = await Menu.create({
                name: "Customize a Page",
                parentMenu: pages2,
                nestLevel: 3,
                order: 3,
            });
            await customizeAPage3.populate("parentMenu");

            var publishing3 = await Menu.create({
                name: "Publishing",
                parentMenu: pages2,
                nestLevel: 3,
                order: 4,
            });
            await publishing3.populate("parentMenu");

            // groups
            var postParticipate3 = await Menu.create({
                name: "Post, Participate, and Privacy",
                parentMenu: groups2,
                nestLevel: 3,
                order: 1,
            });
            await postParticipate3.populate("parentMenu");

            var createEngage3 = await Menu.create({
                name: "Create, Engage, and Manage Settings",
                parentMenu: groups2,
                nestLevel: 3,
                order: 2,
            });
            await createEngage3.populate("parentMenu");

            var managePeopleAndContent3 = await Menu.create({
                name: "Manage People and Content",
                parentMenu: groups2,
                nestLevel: 3,
                order: 3,
            });
            await managePeopleAndContent3.populate("parentMenu");

            var communityChats3 = await Menu.create({
                name: "Community Chats",
                parentMenu: groups2,
                nestLevel: 3,
                order: 4,
            });
            await communityChats3.populate("parentMenu");
        } catch (err) {
            console.error(err);
        }

        // managing your account

        try {
            // login and password
            var logIntoYourAccount3 = await Menu.create({
                name: "Log Into Your Account",
                parentMenu: loginAndPassword2,
                nestLevel: 3,
                order: 1,
            });
            await logIntoYourAccount3.populate("parentMenu");

            var changeYourPassword3 = await Menu.create({
                name: "Change Your Password",
                parentMenu: loginAndPassword2,
                nestLevel: 3,
                order: 2,
            });
            await changeYourPassword3.populate("parentMenu");

            var fixALoginProblem3 = await Menu.create({
                name: "Fix a Login Problem",
                parentMenu: loginAndPassword2,
                nestLevel: 3,
                order: 3,
            });
            await fixALoginProblem3.populate("parentMenu");

            var uploadingYourID3 = await Menu.create({
                name: "Uploading Your ID",
                parentMenu: loginAndPassword2,
                nestLevel: 3,
                order: 4,
            });
            await uploadingYourID3.populate("parentMenu");

            // account settings
            var adjustYourAccountSettings3 = await Menu.create({
                name: "Adjust Your Account Settings",
                parentMenu: accountSettings2,
                nestLevel: 3,
                order: 1,
            });
            await adjustYourAccountSettings3.populate("parentMenu");

            var connectToFacebookWithout3 = await Menu.create({
                name: "Connect to Facebook Without Data Charges",
                parentMenu: accountSettings2,
                nestLevel: 3,
                order: 2,
            });
            await connectToFacebookWithout3.populate("parentMenu");

            var yourUsername3 = await Menu.create({
                name: "Your Username",
                parentMenu: accountSettings2,
                nestLevel: 3,
                order: 3,
            });
            await yourUsername3.populate("parentMenu");

            var legacyContacts3 = await Menu.create({
                name: "Legacy Contacts",
                parentMenu: accountSettings2,
                nestLevel: 3,
                order: 4,
            });
            await legacyContacts3.populate("parentMenu");

            // notifications
            var pushEmailAndText3 = await Menu.create({
                name: "Push, Email, and Text Notifications",
                parentMenu: notifications2,
                nestLevel: 3,
                order: 1,
            });
            await pushEmailAndText3.populate("parentMenu");

            var chooseWhatYoureNotified3 = await Menu.create({
                name: "Choose What You're Notified About",
                parentMenu: notifications2,
                nestLevel: 3,
                order: 2,
            });
            await chooseWhatYoureNotified3.populate("parentMenu");

            var fixAProblem3 = await Menu.create({
                name: "Fix a Problem",
                parentMenu: notifications2,
                nestLevel: 3,
                order: 3,
            });
            await fixAProblem3.populate("parentMenu");

            // ad preferences
            var howAdsWork3 = await Menu.create({
                name: "How Ads Work on Facebook",
                parentMenu: adPreferences2,
                nestLevel: 3,
                order: 1,
            });
            await howAdsWork3.populate("parentMenu");

            var controlTheAds3 = await Menu.create({
                name: "Control the Ads You See",
                parentMenu: adPreferences2,
                nestLevel: 3,
                order: 2,
            });
            await controlTheAds3.populate("parentMenu");

            var yourInfoAndFacebook3 = await Menu.create({
                name: "Your Info and Facebook Ads",
                parentMenu: adPreferences2,
                nestLevel: 3,
                order: 3,
            });
            await yourInfoAndFacebook3.populate("parentMenu");
        } catch (err) {
            console.error(err);
        }

        // privacy, safety, and security
        try {
            // your privacy
            var controlWhoCanSee3 = await Menu.create({
                name: "Control who can see what you share on Facebook",
                parentMenu: yourPrivacy2,
                nestLevel: 3,
                order: 1,
            });
            await controlWhoCanSee3.populate("parentMenu");

            var manageWhatYouveShared3 = await Menu.create({
                name: "Manage What You've Shared",
                parentMenu: yourPrivacy2,
                nestLevel: 3,
                order: 2,
            });
            await manageWhatYouveShared3.populate("parentMenu");

            var controlWhoCanFindYou3 = await Menu.create({
                name: "Control Who Can Find You",
                parentMenu: yourPrivacy2,
                nestLevel: 3,
                order: 3,
            });
            await controlWhoCanFindYou3.populate("parentMenu");

            // staying safe
            var abuseResources3 = await Menu.create({
                name: "Abuse Resources",
                parentMenu: stayingSafe2,
                nestLevel: 3,
                order: 1,
            });
            await abuseResources3.populate("parentMenu");

            var suicideAndSelfInjury3 = await Menu.create({
                name: "Suicide and Self-Injury Resources",
                parentMenu: stayingSafe2,
                nestLevel: 3,
                order: 2,
            });
            await suicideAndSelfInjury3.populate("parentMenu");

            var crisisResponse3 = await Menu.create({
                name: "Crisis Response",
                parentMenu: stayingSafe2,
                nestLevel: 3,
                order: 3,
            });
            await crisisResponse3.populate("parentMenu");

            var safetyResourcesForParents3 = await Menu.create({
                name: "Safety Resources for Parents",
                parentMenu: stayingSafe2,
                nestLevel: 3,
                order: 4,
            });
            await safetyResourcesForParents3.populate("parentMenu");

            // keeping your account secure
            var securityFeatures3 = await Menu.create({
                name: "Security Features and Tips",
                parentMenu: keepingYourAccount2,
                nestLevel: 3,
                order: 1,
            });
            await securityFeatures3.populate("parentMenu");

            var loginAlertsAnd3 = await Menu.create({
                name: "Login Alerts and Two-Factor Authentication",
                parentMenu: keepingYourAccount2,
                nestLevel: 3,
                order: 2,
            });
            await loginAlertsAnd3.populate("parentMenu");

            var avoidSpamAndScams3 = await Menu.create({
                name: "Avoid Spam and Scams",
                parentMenu: keepingYourAccount2,
                nestLevel: 3,
                order: 3,
            });
            await avoidSpamAndScams3.populate("parentMenu");

            // shopping safety
            var recognizingScams3 = await Menu.create({
                name: "Recognizing Scams",
                parentMenu: shoppingSafety2,
                nestLevel: 3,
                order: 1,
            });
            await recognizingScams3.populate("parentMenu");

            var avoidingScams3 = await Menu.create({
                name: "Avoiding Scams",
                parentMenu: shoppingSafety2,
                nestLevel: 3,
                order: 2,
            });
            await avoidingScams3.populate("parentMenu");

            var buyingOnMarketplace3 = await Menu.create({
                name: "Buying on Marketplace",
                parentMenu: shoppingSafety2,
                nestLevel: 3,
                order: 3,
            });
            await buyingOnMarketplace3.populate("parentMenu");

            var tipsForShoppingSafely3 = await Menu.create({
                name: "Tips for Shopping Safely",
                parentMenu: shoppingSafety2,
                nestLevel: 3,
                order: 4,
            });
            await tipsForShoppingSafely3.populate("parentMenu");
        } catch (err) {
            console.error(err);
        }

        // policies and reporting
        try {
            // reporting abuse
            var reportContentOnFacebook3 = await Menu.create({
                name: "Report Content on Facebook",
                parentMenu: reportingAbuse2,
                nestLevel: 3,
                order: 1,
            });
            await reportContentOnFacebook3.populate("parentMenu");

            var dontHaveAnAccount3 = await Menu.create({
                name: "Don't Have an Account?",
                parentMenu: reportingAbuse2,
                nestLevel: 3,
                order: 2,
            });
            await dontHaveAnAccount3.populate("parentMenu");

            // reporting a problem with facebook
            var somethingIsntWorking3 = await Menu.create({
                name: "Something Isn't Working",
                parentMenu: reportingAProblem2,
                nestLevel: 3,
                order: 1,
            });
            await somethingIsntWorking3.populate("parentMenu");

            var reportAbusiveContent3 = await Menu.create({
                name: "Report Abusive Content",
                parentMenu: reportingAProblem2,
                nestLevel: 3,
                order: 2,
            });
            await reportAbusiveContent3.populate("parentMenu");

            var giveUsFeedback3 = await Menu.create({
                name: "Give Us Feedback",
                parentMenu: reportingAProblem2,
                nestLevel: 3,
                order: 3,
            });
            await giveUsFeedback3.populate("parentMenu");

            // being your authentic self on facebook
            var verifyingYourIdentity3 = await Menu.create({
                name: "Verifying your identity",
                parentMenu: beingYourAuthentic2,
                nestLevel: 3,
                order: 1,
            });
            await verifyingYourIdentity3.populate("parentMenu");

            var updatingYourProfileInfo3 = await Menu.create({
                name: "Updating your profile information",
                parentMenu: beingYourAuthentic2,
                nestLevel: 3,
                order: 2,
            });
            await updatingYourProfileInfo3.populate("parentMenu");

            var stayingSafeOnFacebook3 = await Menu.create({
                name: "Staying safe on Facebook",
                parentMenu: beingYourAuthentic2,
                nestLevel: 3,
                order: 3,
            });
            await stayingSafeOnFacebook3.populate("parentMenu");

            var metaPay3 = await Menu.create({
                name: "Meta Pay",
                parentMenu: beingYourAuthentic2,
                nestLevel: 3,
                order: 4,
            });
            await metaPay3.populate("parentMenu");

            // hacked and fake accounts
            var hackedAccounts3 = await Menu.create({
                name: "Hacked Accounts",
                parentMenu: hackedAndFakeAccounts2,
                nestLevel: 3,
                order: 1,
            });
            await hackedAccounts3.populate("parentMenu");

            var impersonatingAccounts3 = await Menu.create({
                name: "Impersonating Accounts",
                parentMenu: hackedAndFakeAccounts2,
                nestLevel: 3,
                order: 2,
            });
            await impersonatingAccounts3.populate("parentMenu");

            var fakeAccounts3 = await Menu.create({
                name: "Fake Accounts",
                parentMenu: hackedAndFakeAccounts2,
                nestLevel: 3,
                order: 3,
            });
            await fakeAccounts3.populate("parentMenu");

            // Using Facebook > Your Profile > Add and Edit Your Profile Info
            var basicProfileInfo4 = await Menu.create({
                name: "Basic Profile Information",
                parentMenu: addAndEditYourProfile3,
                nestLevel: 4,
                order: 1,
            });
            await basicProfileInfo4.populate("parentMenu");

            var aboutSectionProfile4 = await Menu.create({
                name: "About Section of your Profile",
                parentMenu: addAndEditYourProfile3,
                nestLevel: 4,
                order: 2,
            });
            await aboutSectionProfile4.populate("parentMenu");

            var professionalMode4 = await Menu.create({
                name: "Professional mode",
                parentMenu: addAndEditYourProfile3,
                nestLevel: 4,
                order: 3,
            });
            await professionalMode4.populate("parentMenu");

            // Using Facebook > Your Profile > Your Profile Picture and Cover Photo
            var addOrChangeFBPFP4 = await Menu.create({
                name: "Add or change your Facebook profile picture",
                parentMenu: yourProfilePicture3,
                nestLevel: 4,
                order: 1,
            });
            await addOrChangeFBPFP4.populate("parentMenu");

            var howDoIEditFBPFPThumb4 = await Menu.create({
                name: "How do I edit my Facebook profile picture thumbnail?",
                parentMenu: yourProfilePicture3,
                nestLevel: 4,
                order: 2,
            });
            await howDoIEditFBPFPThumb4.populate("parentMenu");

            var howDoISeeOldProfileVids4 = await Menu.create({
                name: "How do I see old profile videos on Facebook?",
                parentMenu: yourProfilePicture3,
                nestLevel: 4,
                order: 3,
            });
            await howDoISeeOldProfileVids4.populate("parentMenu");

            var howDoIAddFrameToPhoto4 = await Menu.create({
                name: "How do I add a frame to a photo, or remove a frame on Facebook?",
                parentMenu: yourProfilePicture3,
                nestLevel: 4,
                order: 4,
            });
            await howDoIAddFrameToPhoto4.populate("parentMenu");

            // Using Facebook > Your Profile > Share and Manage Posts on Your Profile
            var howDoIShareSomething4 = await Menu.create({
                name: "How do I share something on Facebook?",
                parentMenu: shareAndManagePosts3,
                nestLevel: 4,
                order: 1,
            });
            await howDoIShareSomething4.populate("parentMenu");

            var turnOnTimelineReview4 = await Menu.create({
                name: "How do I share something on Facebook?",
                parentMenu: shareAndManagePosts3,
                nestLevel: 4,
                order: 2,
            });
            await turnOnTimelineReview4.populate("parentMenu");

            var stopPeopleFromPosting4 = await Menu.create({
                name: "Stop people from posting on your Facebook profile",
                parentMenu: shareAndManagePosts3,
                nestLevel: 4,
                order: 3,
            });
            await stopPeopleFromPosting4.populate("parentMenu");

            var howDoIPostSomething4 = await Menu.create({
                name: "How do I post something on someone else's Facebook timeline?",
                parentMenu: shareAndManagePosts3,
                nestLevel: 4,
                order: 4,
            });
            await howDoIPostSomething4.populate("parentMenu");

            // Using Facebook > Messaging > Send Messages
            var sendMessages4 = await Menu.create({
                name: "Send Messages",
                parentMenu: sendMessages3,
                nestLevel: 4,
                order: 1,
            });
            await sendMessages4.populate("parentMenu");

            var deleting4 = await Menu.create({
                name: "Deleting",
                parentMenu: sendMessages3,
                nestLevel: 4,
                order: 2,
            });
            await deleting4.populate("parentMenu");

            var groupConversations4 = await Menu.create({
                name: "Group Conversations",
                parentMenu: sendMessages3,
                nestLevel: 4,
                order: 3,
            });
            await groupConversations4.populate("parentMenu");

            var messagingPagesEvents4 = await Menu.create({
                name: "Messaging Pages, Events, and Groups",
                parentMenu: sendMessages3,
                nestLevel: 4,
                order: 4,
            });
            await messagingPagesEvents4.populate("parentMenu");

            // Using Facebook > Messaging > View and Manage Messages
            var viewMessages4 = await Menu.create({
                name: "View Messages",
                parentMenu: viewAndManageMessages3,
                nestLevel: 4,
                order: 1,
            });
            await viewMessages4.populate("parentMenu");

            var deleteAndArchive4 = await Menu.create({
                name: "Delete and Archive Messages",
                parentMenu: viewAndManageMessages3,
                nestLevel: 4,
                order: 2,
            });
            await deleteAndArchive4.populate("parentMenu");

            // Using Facebook > Messaging > Report a Message
            var whatToDoIfSomeonesBothering4 = await Menu.create({
                name: "What to do if someone's bothering you in messages on Facebook",
                parentMenu: reportAMessage3,
                nestLevel: 4,
                order: 1,
            });
            await whatToDoIfSomeonesBothering4.populate("parentMenu");

            var blockMessagesFromAProfile4 = await Menu.create({
                name: "Block messages from a profile on Facebook",
                parentMenu: reportAMessage3,
                nestLevel: 4,
                order: 2,
            });
            await blockMessagesFromAProfile4.populate("parentMenu");

            var reportAMessageOnFBAsSpam4 = await Menu.create({
                name: "Report a message on Facebook as spam",
                parentMenu: reportAMessage3,
                nestLevel: 4,
                order: 3,
            });
            await reportAMessageOnFBAsSpam4.populate("parentMenu");

            var howToHandleBullying4 = await Menu.create({
                name: "How to handle bullying, harassment, or personal attack on Facebook",
                parentMenu: reportAMessage3,
                nestLevel: 4,
                order: 4,
            });
            await howToHandleBullying4.populate("parentMenu");

            // Using Facebook > messaging > Video Calling
            var calling4 = await Menu.create({
                name: "Calling",
                parentMenu: videoCalling3,
                nestLevel: 4,
                order: 1,
            });
            await calling4.populate("parentMenu");

            var rooms4 = await Menu.create({
                name: "Rooms",
                parentMenu: videoCalling3,
                nestLevel: 4,
                order: 2,
            });
            await rooms4.populate("parentMenu");

            // Using Facebook > Pages > Create and Manage a Page
            var createAFacebookPage4 = await Menu.create({
                name: "Create a Facebook Page",
                parentMenu: createAndManageAPage3,
                nestLevel: 4,
                order: 1,
            });
            await createAFacebookPage4.populate("parentMenu");

            var mergeFacebookPages4 = await Menu.create({
                name: "Merge Facebook Pages",
                parentMenu: createAndManageAPage3,
                nestLevel: 4,
                order: 2,
            });
            await mergeFacebookPages4.populate("parentMenu");

            var inviteFriends4 = await Menu.create({
                name: "Invite friends",
                parentMenu: createAndManageAPage3,
                nestLevel: 4,
                order: 3,
            });
            await inviteFriends4.populate("parentMenu");

            var deleteOrDeactivate4 = await Menu.create({
                name: "Delete or deactivate your Page",
                parentMenu: createAndManageAPage3,
                nestLevel: 4,
                order: 4,
            });
            await deleteOrDeactivate4.populate("parentMenu");

            // Using Facebook > Pages > Manage Page Settings
            var pageRoles4 = await Menu.create({
                name: "Page Roles",
                parentMenu: managePageSettings3,
                nestLevel: 4,
                order: 1,
            });
            await pageRoles4.populate("parentMenu");

            var privacyAndVisibility4 = await Menu.create({
                name: "Privacy and Visibility Settings",
                parentMenu: managePageSettings3,
                nestLevel: 4,
                order: 2,
            });
            await privacyAndVisibility4.populate("parentMenu");

            var connectAPage4 = await Menu.create({
                name: "Connect a Page",
                parentMenu: managePageSettings3,
                nestLevel: 4,
                order: 3,
            });
            await connectAPage4.populate("parentMenu");

            // Using Facebook > Pages > Customize a Page
            var profilePicturesAndCover4 = await Menu.create({
                name: "Profile Pictures and Cover Photos",
                parentMenu: customizeAPage3,
                nestLevel: 4,
                order: 1,
            });
            await profilePicturesAndCover4.populate("parentMenu");

            var categoriesAndTemplates4 = await Menu.create({
                name: "Categories and Templates",
                parentMenu: customizeAPage3,
                nestLevel: 4,
                order: 2,
            });
            await categoriesAndTemplates4.populate("parentMenu");

            var editPageDetails4 = await Menu.create({
                name: "Edit Page Details",
                parentMenu: customizeAPage3,
                nestLevel: 4,
                order: 3,
            });
            await editPageDetails4.populate("parentMenu");

            var callToActionBtns4 = await Menu.create({
                name: "Call-to-Action Buttons",
                parentMenu: customizeAPage3,
                nestLevel: 4,
                order: 4,
            });
            await callToActionBtns4.populate("parentMenu");

            // Using Facebook > Pages > Publishing
            var basics4 = await Menu.create({
                name: "Basics",
                parentMenu: publishing3,
                nestLevel: 4,
                order: 1,
            });
            await basics4.populate("parentMenu");

            var visibilityAndEditing4 = await Menu.create({
                name: "Visibility & Editing",
                parentMenu: publishing3,
                nestLevel: 4,
                order: 2,
            });
            await visibilityAndEditing4.populate("parentMenu");

            var draftsAndScheduledPosts4 = await Menu.create({
                name: "Drafts & Scheduled Posts",
                parentMenu: publishing3,
                nestLevel: 4,
                order: 3,
            });
            await draftsAndScheduledPosts4.populate("parentMenu");

            var events4 = await Menu.create({
                name: "Events",
                parentMenu: publishing3,
                nestLevel: 4,
                order: 4,
            });
            await events4.populate("parentMenu");

            // Using Facebook > Groups > Post, Participate, and Privacy
            var post4 = await Menu.create({
                name: "Post",
                parentMenu: postParticipate3,
                nestLevel: 4,
                order: 1,
            });
            await post4.populate("parentMenu");

            var participate4 = await Menu.create({
                name: "Participate",
                parentMenu: postParticipate3,
                nestLevel: 4,
                order: 2,
            });
            await participate4.populate("parentMenu");

            var privacy4 = await Menu.create({
                name: "Privacy",
                parentMenu: postParticipate3,
                nestLevel: 4,
                order: 3,
            });
            await privacy4.populate("parentMenu");

            var buyAndSellGroups4 = await Menu.create({
                name: "Buy and Sell Groups",
                parentMenu: postParticipate3,
                nestLevel: 4,
                order: 4,
            });
            await buyAndSellGroups4.populate("parentMenu");

            // Using Facebook > Groups > Create, Engage, and Manage Settings
            var create4 = await Menu.create({
                name: "Create",
                parentMenu: createEngage3,
                nestLevel: 4,
                order: 1,
            });
            await create4.populate("parentMenu");

            var manageGroupSettings4 = await Menu.create({
                name: "Manage Group Settings",
                parentMenu: createEngage3,
                nestLevel: 4,
                order: 2,
            });
            await manageGroupSettings4.populate("parentMenu");

            var manageGroupFeatures4 = await Menu.create({
                name: "Manage Group Features",
                parentMenu: createEngage3,
                nestLevel: 4,
                order: 3,
            });
            await manageGroupFeatures4.populate("parentMenu");

            var engage4 = await Menu.create({
                name: "Engage",
                parentMenu: createEngage3,
                nestLevel: 4,
                order: 4,
            });
            await engage4.populate("parentMenu");

            // Using Facebook > Groups > Manage People and Content
            var managePeople4 = await Menu.create({
                name: "Manage People",
                parentMenu: managePeopleAndContent3,
                nestLevel: 4,
                order: 1,
            });
            await managePeople4.populate("parentMenu");

            var manageContent4 = await Menu.create({
                name: "Manage Content",
                parentMenu: managePeopleAndContent3,
                nestLevel: 4,
                order: 2,
            });
            await manageContent4.populate("parentMenu");

            var enforceAndModerate4 = await Menu.create({
                name: "Enforce and Moderate",
                parentMenu: managePeopleAndContent3,
                nestLevel: 4,
                order: 3,
            });
            await enforceAndModerate4.populate("parentMenu");

            var adminAndModeratorTeam4 = await Menu.create({
                name: "Admin and Moderator Team",
                parentMenu: managePeopleAndContent3,
                nestLevel: 4,
                order: 4,
            });
            await adminAndModeratorTeam4.populate("parentMenu");

            // Using Facebook > Groups > Community Chats
            var getStarted4 = await Menu.create({
                name: "Get started",
                parentMenu: communityChats3,
                nestLevel: 4,
                order: 1,
            });
            await getStarted4.populate("parentMenu");

            var useCommunityChats4 = await Menu.create({
                name: "Use community chats",
                parentMenu: communityChats3,
                nestLevel: 4,
                order: 2,
            });
            await useCommunityChats4.populate("parentMenu");

            var manageCommunityChats4 = await Menu.create({
                name: "Manage community chats",
                parentMenu: communityChats3,
                nestLevel: 4,
                order: 3,
            });
            await manageCommunityChats4.populate("parentMenu");

            // Managing Your Account > Login and Password > Log Into Your Account
            var logIntoYourFBAcct4 = await Menu.create({
                name: "Log into your Facebook account",
                parentMenu: logIntoYourAccount3,
                nestLevel: 4,
                order: 1,
            });
            await logIntoYourFBAcct4.populate("parentMenu");

            var logOutOfFB4 = await Menu.create({
                name: "Log out of Facebook",
                parentMenu: logIntoYourAccount3,
                nestLevel: 4,
                order: 2,
            });
            await logOutOfFB4.populate("parentMenu");

            var addOrRemovedSaved4 = await Menu.create({
                name: "Add or remove a saved account from your phone",
                parentMenu: logIntoYourAccount3,
                nestLevel: 4,
                order: 3,
            });
            await addOrRemovedSaved4.populate("parentMenu");

            var iDontKnowifI4 = await Menu.create({
                name: "I don't know if I still have a Facebook account",
                parentMenu: logIntoYourAccount3,
                nestLevel: 4,
                order: 4,
            });
            await iDontKnowifI4.populate("parentMenu");

            // Managing Your Account > Login and Password > Change Your Password
            var changeOrReset4 = await Menu.create({
                name: "Change or reset your Facebook password",
                parentMenu: changeYourPassword3,
                nestLevel: 4,
                order: 1,
            });
            await changeOrReset4.populate("parentMenu");

            var makeAStrongFBPW4 = await Menu.create({
                name: "Make a strong Facebook password",
                parentMenu: changeYourPassword3,
                nestLevel: 4,
                order: 2,
            });
            await makeAStrongFBPW4.populate("parentMenu");

            var canYouSendMe4 = await Menu.create({
                name: "Can you send me a copy of my Facebook password without resetting it?",
                parentMenu: changeYourPassword3,
                nestLevel: 4,
                order: 3,
            });
            await canYouSendMe4.populate("parentMenu");

            var getAOneTimePW4 = await Menu.create({
                name: "Get a one-time password to log into Facebook",
                parentMenu: changeYourPassword3,
                nestLevel: 4,
                order: 4,
            });
            await getAOneTimePW4.populate("parentMenu");

            // Managing Your Account > Login and Password > Fix a Login Problem
            var loginHelp4 = await Menu.create({
                name: "Login Help",
                parentMenu: fixALoginProblem3,
                nestLevel: 4,
                order: 1,
            });
            await loginHelp4.populate("parentMenu");

            var passwordHelp4 = await Menu.create({
                name: "Password Help",
                parentMenu: fixALoginProblem3,
                nestLevel: 4,
                order: 2,
            });
            await passwordHelp4.populate("parentMenu");

            // Managing Your Account > Login and Password > Uploading Your ID
            var typesOfIDs4 = await Menu.create({
                name: "Types of IDs that Facebook accepts",
                parentMenu: uploadingYourID3,
                nestLevel: 4,
                order: 1,
            });
            await typesOfIDs4.populate("parentMenu");

            var howToUploadAnID4 = await Menu.create({
                name: "How to upload an ID to Facebook",
                parentMenu: uploadingYourID3,
                nestLevel: 4,
                order: 2,
            });
            await howToUploadAnID4.populate("parentMenu");

            var whyFacebookMayAsk4 = await Menu.create({
                name: "Why Facebook may ask you to upload an ID",
                parentMenu: uploadingYourID3,
                nestLevel: 4,
                order: 3,
            });
            await whyFacebookMayAsk4.populate("parentMenu");

            var whatHappensToYourID4 = await Menu.create({
                name: "What happens to your ID after you send it to Facebook",
                parentMenu: uploadingYourID3,
                nestLevel: 4,
                order: 4,
            });
            await whatHappensToYourID4.populate("parentMenu");

            // Managing Your Account > Account Settings > Adjust Your Account Settings
            var findYourFBSettings4 = await Menu.create({
                name: "Find your Facebook settings",
                parentMenu: adjustYourAccountSettings3,
                nestLevel: 4,
                order: 1,
            });
            await findYourFBSettings4.populate("parentMenu");

            var howToChangeYourLanguage4 = await Menu.create({
                name: "How to change your language settings on Facebook",
                parentMenu: adjustYourAccountSettings3,
                nestLevel: 4,
                order: 2,
            });
            await howToChangeYourLanguage4.populate("parentMenu");

            var addOrRemoveAnEmail4 = await Menu.create({
                name: "Add or remove an email from your Facebook account",
                parentMenu: adjustYourAccountSettings3,
                nestLevel: 4,
                order: 3,
            });
            await addOrRemoveAnEmail4.populate("parentMenu");

            var addOrRemoveAMobilePhoneNo4 = await Menu.create({
                name: "Add or remove a mobile phone number from your Facebook account",
                parentMenu: adjustYourAccountSettings3,
                nestLevel: 4,
                order: 4,
            });
            await addOrRemoveAMobilePhoneNo4.populate("parentMenu");

            // Managing Your Account > Account Settings > Connect to Facebook Without Data Charges
            var usingBasicMode4 = await Menu.create({
                name: "Using basic mode",
                parentMenu: connectToFacebookWithout3,
                nestLevel: 4,
                order: 1,
            });
            await usingBasicMode4.populate("parentMenu");

            // Managing Your Account > Account Settings > Your Username
            var howUsernamesAndUserIDs4 = await Menu.create({
                name: "How usernames and user IDs are used on Facebook Profiles",
                parentMenu: yourUsername3,
                nestLevel: 4,
                order: 1,
            });
            await howUsernamesAndUserIDs4.populate("parentMenu");

            var guidelinesForCreating4 = await Menu.create({
                name: "Guidelines for creating a custom username or screen name on Facebook",
                parentMenu: yourUsername3,
                nestLevel: 4,
                order: 2,
            });
            await guidelinesForCreating4.populate("parentMenu");

            var howToFindOrChange4 = await Menu.create({
                name: "How to find or change your Facebook username",
                parentMenu: yourUsername3,
                nestLevel: 4,
                order: 3,
            });
            await howToFindOrChange4.populate("parentMenu");

            var whatToDoIfTheUsername4 = await Menu.create({
                name: "What to do if the username you want isn't available on Facebook",
                parentMenu: yourUsername3,
                nestLevel: 4,
                order: 4,
            });
            await whatToDoIfTheUsername4.populate("parentMenu");

            // Managing Your Account > Account Settings > Legacy Contacts
            var chooseALegacyContact4 = await Menu.create({
                name: "Choose a legacy contact",
                parentMenu: legacyContacts3,
                nestLevel: 4,
                order: 1,
            });
            await chooseALegacyContact4.populate("parentMenu");

            var iAmALegacyContact4 = await Menu.create({
                name: "I am a legacy contact",
                parentMenu: legacyContacts3,
                nestLevel: 4,
                order: 2,
            });
            await iAmALegacyContact4.populate("parentMenu");

            var troubleshooting4 = await Menu.create({
                name: "Troubleshooting",
                parentMenu: legacyContacts3,
                nestLevel: 4,
                order: 3,
            });
            await troubleshooting4.populate("parentMenu");

            // Using Facebook > Your Profile > Add and Edit Your Profile Info > Basic Profile Information
            var changeName5 = await Menu.create({
                name: "Change name",
                parentMenu: basicProfileInfo4,
                nestLevel: 5,
                order: 1,
            });
            await changeName5.populate("parentMenu");

            var addOrEditIntro5 = await Menu.create({
                name: "Add or edit intro section",
                parentMenu: basicProfileInfo4,
                nestLevel: 5,
                order: 2,
            });
            await addOrEditIntro5.populate("parentMenu");

            var editInformationOnFBProfile5 = await Menu.create({
                name: "Edit information on your Facebook profile and choose who can see it",
                parentMenu: basicProfileInfo4,
                nestLevel: 5,
                order: 3,
            });
            await editInformationOnFBProfile5.populate("parentMenu");

            var updatePhotosAndStories5 = await Menu.create({
                name: "Update photos and stories in the Featured section of your Facebook profile",
                parentMenu: basicProfileInfo4,
                nestLevel: 5,
                order: 4,
            });
            await updatePhotosAndStories5.populate("parentMenu");

            // Using Facebook > Your Profile > Add and Edit Your Profile Info > About section of your profile
            var updateTheAboutSection5 = await Menu.create({
                name: "Update the About section of your Facebook Profile",
                parentMenu: aboutSectionProfile4,
                nestLevel: 5,
                order: 1,
            });
            await updateTheAboutSection5.populate("parentMenu");

            var changeYourRelationship5 = await Menu.create({
                name: "Change your relationship status on your Facebook profile",
                parentMenu: aboutSectionProfile4,
                nestLevel: 5,
                order: 2,
            });
            await changeYourRelationship5.populate("parentMenu");

            var changeYourBirthday5 = await Menu.create({
                name: "Change your birthday on Facebook and choose who can see it",
                parentMenu: aboutSectionProfile4,
                nestLevel: 5,
                order: 3,
            });
            await changeYourBirthday5.populate("parentMenu");

            var addYourNamePronunciation5 = await Menu.create({
                name: "Add your name pronunciation to your Facebook Profile",
                parentMenu: aboutSectionProfile4,
                nestLevel: 5,
                order: 4,
            });
            await addYourNamePronunciation5.populate("parentMenu");

            // Using Facebook > Your Profile > Add and Edit Your Profile Info > Professional mode
            var whenToCreateAPage5_1 = await Menu.create({
                name: "When to create a Page or turn on professional mode for your profile",
                parentMenu: professionalMode4,
                nestLevel: 5,
                order: 1,
            });
            await whenToCreateAPage5_1.populate("parentMenu");

            var turnProfessionalMode5 = await Menu.create({
                name: "Turn professional mode on or off for your Facebook profile",
                parentMenu: professionalMode4,
                nestLevel: 5,
                order: 2,
            });
            await turnProfessionalMode5.populate("parentMenu");

            var profileTransparency5 = await Menu.create({
                name: "Profile Transparency section on Professional Mode",
                parentMenu: professionalMode4,
                nestLevel: 5,
                order: 3,
            });
            await profileTransparency5.populate("parentMenu");

            // Using Facebook > Messaging > Send Messages > Send Messages
            var editAMessageOnFB5 = await Menu.create({
                name: "Edit a message on Facebook",
                parentMenu: sendMessages4,
                nestLevel: 5,
                order: 1,
            });
            await editAMessageOnFB5.populate("parentMenu");

            var removeAMessage5 = await Menu.create({
                name: "Remove a message you've sent on Facebook",
                parentMenu: sendMessages4,
                nestLevel: 5,
                order: 2,
            });
            await removeAMessage5.populate("parentMenu");

            var whoCanISendMessages5 = await Menu.create({
                name: "Who can I send messages to on Facebook",
                parentMenu: sendMessages4,
                nestLevel: 5,
                order: 3,
            });
            await whoCanISendMessages5.populate("parentMenu");

            var howMessageOnFBWork5 = await Menu.create({
                name: "How messages on Facebook work",
                parentMenu: sendMessages4,
                nestLevel: 5,
                order: 4,
            });
            await howMessageOnFBWork5.populate("parentMenu");

            // Using Facebook > Messaging > Send Messages > Deleting
            var howDoIdeleteSticker5 = await Menu.create({
                name: "How do I delete sticker packs for my Facebook messages?",
                parentMenu: deleting4,
                nestLevel: 5,
                order: 1,
            });
            await howDoIdeleteSticker5.populate("parentMenu");

            var canIRetrieveDeleted5_1 = await Menu.create({
                name: "Can I retrieve deleted messages on Facebook?",
                parentMenu: deleting4,
                nestLevel: 5,
                order: 2,
            });
            await canIRetrieveDeleted5_1.populate("parentMenu");

            // Using Facebook > Messaging > Send Messages > Group Conversations
            var howManyPeopleCanIMessage5 = await Menu.create({
                name: "How many people can I message at once on Facebook?",
                parentMenu: groupConversations4,
                nestLevel: 5,
                order: 1,
            });
            await howManyPeopleCanIMessage5.populate("parentMenu");

            var howDoIChatWithMore5 = await Menu.create({
                name: "How do I chat with more than one friend at once on Facebook?",
                parentMenu: groupConversations4,
                nestLevel: 5,
                order: 2,
            });
            await howDoIChatWithMore5.populate("parentMenu");

            var leaveAGroupChatOnFB5 = await Menu.create({
                name: "Leave a group chat on Facebook",
                parentMenu: groupConversations4,
                nestLevel: 5,
                order: 3,
            });
            await leaveAGroupChatOnFB5.populate("parentMenu");

            // Using Facebook > Messaging > Send Messages > Messaging Pages, Events, and Groups
            var sendAMessageToYourFB5 = await Menu.create({
                name: "Send a message to your Facebook event guest list",
                parentMenu: messagingPagesEvents4,
                nestLevel: 5,
                order: 1,
            });
            await sendAMessageToYourFB5.populate("parentMenu");

            var sendAPrivateMessage5 = await Menu.create({
                name: "Send a private message to a Facebook Page",
                parentMenu: messagingPagesEvents4,
                nestLevel: 5,
                order: 2,
            });
            await sendAPrivateMessage5.populate("parentMenu");

            // Using Facebook > Messaging > View and Manage Messages > View Messages
            var messagesYoullGet5 = await Menu.create({
                name: "Messages you'll get on Facebook",
                parentMenu: viewMessages4,
                nestLevel: 5,
                order: 1,
            });
            await messagesYoullGet5.populate("parentMenu");

            var whatAreMessageRequests5 = await Menu.create({
                name: "What are message requests?",
                parentMenu: viewMessages4,
                nestLevel: 5,
                order: 2,
            });
            await whatAreMessageRequests5.populate("parentMenu");

            var checkYourMessageRequests5 = await Menu.create({
                name: "Check your message requests on Facebook",
                parentMenu: viewMessages4,
                nestLevel: 5,
                order: 3,
            });
            await checkYourMessageRequests5.populate("parentMenu");

            // Using Facebook > Messaging > View and Manage Messages > Delete and Archive Messages
            var deleteAChatOnFB5 = await Menu.create({
                name: "Delete a chat on Facebook",
                parentMenu: deleteAndArchive4,
                nestLevel: 5,
                order: 1,
            });
            await deleteAChatOnFB5.populate("parentMenu");

            var canIRetrieveDeleted5_2 = await Menu.create({
                name: "Can I retrieve deleted messages on Facebook?",
                parentMenu: deleteAndArchive4,
                nestLevel: 5,
                order: 2,
            });
            await canIRetrieveDeleted5_2.populate("parentMenu");

            var hideOrArchiveAChat5 = await Menu.create({
                name: "Hide or archive a chat on Facebook",
                parentMenu: deleteAndArchive4,
                nestLevel: 5,
                order: 3,
            });
            await hideOrArchiveAChat5.populate("parentMenu");

            var searchForAChat5 = await Menu.create({
                name: "Search for a chat or message on Facebook",
                parentMenu: deleteAndArchive4,
                nestLevel: 5,
                order: 4,
            });
            await searchForAChat5.populate("parentMenu");

            // Using Facebook > Messaging > Video Calling > Calling
            var callPeopleOnFB5 = await Menu.create({
                name: "Call people on Facebook",
                parentMenu: calling4,
                nestLevel: 5,
                order: 1,
            });
            await callPeopleOnFB5.populate("parentMenu");

            var troubleshootProblems5 = await Menu.create({
                name: "Troubleshoot problems with your camera, microphone, or speakers for video calling on Facebook",
                parentMenu: calling4,
                nestLevel: 5,
                order: 2,
            });
            await troubleshootProblems5.populate("parentMenu");

            var whatToDoIfYourConnection5 = await Menu.create({
                name: "What to do if your connection is too slow for Facebook calls",
                parentMenu: calling4,
                nestLevel: 5,
                order: 3,
            });
            await whatToDoIfYourConnection5.populate("parentMenu");

            var browsersThatSupport5 = await Menu.create({
                name: "Browsers that support video calling on Facebook",
                parentMenu: calling4,
                nestLevel: 5,
                order: 4,
            });
            await browsersThatSupport5.populate("parentMenu");

            // Using Facebook > Messaging > Video Calling > Rooms
            var createAVideoCall5 = await Menu.create({
                name: "Create a video call from your Facebook feed",
                parentMenu: rooms4,
                nestLevel: 5,
                order: 1,
            });
            await createAVideoCall5.populate("parentMenu");

            var stopSharingYourRoom5 = await Menu.create({
                name: "Stop sharing your room on Facebook",
                parentMenu: rooms4,
                nestLevel: 5,
                order: 2,
            });
            await stopSharingYourRoom5.populate("parentMenu");

            var editYourSettingsForACall5 = await Menu.create({
                name: "Edit your settings for a call you're sharing on Facebook",
                parentMenu: rooms4,
                nestLevel: 5,
                order: 3,
            });
            await editYourSettingsForACall5.populate("parentMenu");

            var createALinkForAVideo5 = await Menu.create({
                name: "Create a link for a video or audio call on Facebook",
                parentMenu: rooms4,
                nestLevel: 5,
                order: 4,
            });
            await createALinkForAVideo5.populate("parentMenu");

            // Using Facebook > Pages > Create and Manage a Page > Create a Facebook Page
            var differencesBetweenProfiles5 = await Menu.create({
                name: "Differences between Profiles, Pages, and Groups on Facebook",
                parentMenu: createAFacebookPage4,
                nestLevel: 5,
                order: 1,
            });
            await differencesBetweenProfiles5.populate("parentMenu");

            var createAFBPage5 = await Menu.create({
                name: "Create a Facebook Page",
                parentMenu: createAFacebookPage4,
                nestLevel: 5,
                order: 2,
            });
            await createAFBPage5.populate("parentMenu");

            var whenToCreateAPage5_2 = await Menu.create({
                name: "When to create a Page or turn on professional mode for your profile",
                parentMenu: createAFacebookPage4,
                nestLevel: 5,
                order: 3,
            });
            await whenToCreateAPage5_2.populate("parentMenu");

            var canIManageAFBPage5 = await Menu.create({
                name: "Can I manage a Facebook Page named for a city, country, or other geographic location?",
                parentMenu: createAFacebookPage4,
                nestLevel: 5,
                order: 4,
            });
            await canIManageAFBPage5.populate("parentMenu");

            // Using Facebook > Pages > Create and Manage a Page > Merge Facebook Pages
            var merge2FBPages5 = await Menu.create({
                name: "Merge 2 Facebook Pages",
                parentMenu: mergeFacebookPages4,
                nestLevel: 5,
                order: 1,
            });
            await merge2FBPages5.populate("parentMenu");

            // Using Facebook > Pages > Create and Manage a Page > Invite friends
            var inviteFriendsToLike5 = await Menu.create({
                name: "Invite friends to like or follow a Page or profile on Facebook",
                parentMenu: inviteFriends4,
                nestLevel: 5,
                order: 1,
            });
            await inviteFriendsToLike5.populate("parentMenu");

            // Using Facebook > Pages > Create and Manage a Page > Delete or deactivate your Page
            var deleteOrCancelDeletion5 = await Menu.create({
                name: "Delete or cancel deletion of your Facebook Page",
                parentMenu: deleteOrDeactivate4,
                nestLevel: 5,
                order: 1,
            });
            await deleteOrCancelDeletion5.populate("parentMenu");

            var deactiveYourFBPage5 = await Menu.create({
                name: "Deactive your Facebook Page",
                parentMenu: deleteOrDeactivate4,
                nestLevel: 5,
                order: 2,
            });
            await deactiveYourFBPage5.populate("parentMenu");

            // Using Facebook > Pages > Manage Page Settings > Page Roles
            var learnAboutFacebookPage5 = await Menu.create({
                name: "Learn about Facebook Page access and roles",
                parentMenu: pageRoles4,
                nestLevel: 5,
                order: 1,
            });
            await learnAboutFacebookPage5.populate("parentMenu");

            var giveEditOrRemoveFBPage5 = await Menu.create({
                name: "Give, edit, or remove Facebook Page access",
                parentMenu: pageRoles4,
                nestLevel: 5,
                order: 2,
            });
            await giveEditOrRemoveFBPage5.populate("parentMenu");

            var seeyourFBPageRole5 = await Menu.create({
                name: "See your Facebook Page role or access",
                parentMenu: pageRoles4,
                nestLevel: 5,
                order: 3,
            });
            await seeyourFBPageRole5.populate("parentMenu");

            var changeYourFBPageNotif5 = await Menu.create({
                name: "Change your Facebook Page notification settings",
                parentMenu: pageRoles4,
                nestLevel: 5,
                order: 4,
            });
            await changeYourFBPageNotif5.populate("parentMenu");

            // Using Facebook > Pages > Manage Page Settings > Privacy and Visibility Settings
            var controlWhoCanSee5 = await Menu.create({
                name: "Control who can see your Facebook Page",
                parentMenu: privacyAndVisibility4,
                nestLevel: 5,
                order: 1,
            });
            await controlWhoCanSee5.populate("parentMenu");

            var addOrEditCountryAndAge5 = await Menu.create({
                name: "Add or edit country and age restrictions for your Page",
                parentMenu: privacyAndVisibility4,
                nestLevel: 5,
                order: 2,
            });
            await addOrEditCountryAndAge5.populate("parentMenu");

            var turnSimilarPage5 = await Menu.create({
                name: "Turn similar Page suggestions on or off for your Page",
                parentMenu: privacyAndVisibility4,
                nestLevel: 5,
                order: 3,
            });
            await turnSimilarPage5.populate("parentMenu");

            var seeWhatYourPage5 = await Menu.create({
                name: "See what your Page looks like to visitors",
                parentMenu: privacyAndVisibility4,
                nestLevel: 5,
                order: 4,
            });
            await seeWhatYourPage5.populate("parentMenu");

            // Using Facebook > Pages > Manage Page Settings > Connect a Page
            var addOrRemoveAnIGAccount5 = await Menu.create({
                name: "Add or remove an Instagram account from your Page",
                parentMenu: connectAPage4,
                nestLevel: 5,
                order: 1,
            });
            await addOrRemoveAnIGAccount5.populate("parentMenu");

            var whatHappensAfterConnecting5 = await Menu.create({
                name: "What happens after connecting your Facebook Page and Instagram account",
                parentMenu: connectAPage4,
                nestLevel: 5,
                order: 2,
            });
            await whatHappensAfterConnecting5.populate("parentMenu");

            var connectYourFBPage5 = await Menu.create({
                name: "Connect your Facebook Page and WhatsApp account",
                parentMenu: connectAPage4,
                nestLevel: 5,
                order: 3,
            });
            await connectYourFBPage5.populate("parentMenu");

            // Using Facebook > Pages > Customize a Page > Profile Pictures and Cover Photos
            var addOrChangeYourFBPagesPFP5 = await Menu.create({
                name: "Add or change your Facebook Page's profile picture",
                parentMenu: profilePicturesAndCover4,
                nestLevel: 5,
                order: 1,
            });
            await addOrChangeYourFBPagesPFP5.populate("parentMenu");

            var addOrChangeYourFBPagesCP5 = await Menu.create({
                name: "Add or change your Facebook Page's cover photo",
                parentMenu: profilePicturesAndCover4,
                nestLevel: 5,
                order: 2,
            });
            await addOrChangeYourFBPagesCP5.populate("parentMenu");

            // Using Facebook > Pages > Customize a Page > Categories and Templates
            var whatFeaturesAreAvailable5 = await Menu.create({
                name: "What features are available based on your Facebook Page's category",
                parentMenu: categoriesAndTemplates4,
                nestLevel: 5,
                order: 1,
            });
            await whatFeaturesAreAvailable5.populate("parentMenu");

            var editYourPagesCategory5 = await Menu.create({
                name: "Edit your Page's category on Facebook",
                parentMenu: categoriesAndTemplates4,
                nestLevel: 5,
                order: 2,
            });
            await editYourPagesCategory5.populate("parentMenu");

            // Using Facebook > Pages > Customize a Page > Edit Page Details
            var addBasicInfo5 = await Menu.create({
                name: "Add basic information to your Page",
                parentMenu: editPageDetails4,
                nestLevel: 5,
                order: 1,
            });
            await addBasicInfo5.populate("parentMenu");

            var addOrEditAnAddress5 = await Menu.create({
                name: "Add or edit an address on your Facebook Page",
                parentMenu: editPageDetails4,
                nestLevel: 5,
                order: 2,
            });
            await addOrEditAnAddress5.populate("parentMenu");

            var addOrChangeBusinessHours5 = await Menu.create({
                name: "Add or change business hours on your Facebook Page",
                parentMenu: editPageDetails4,
                nestLevel: 5,
                order: 3,
            });
            await addOrChangeBusinessHours5.populate("parentMenu");

            var addServicesToYourFBPage5 = await Menu.create({
                name: "Add services to your Facebook Page",
                parentMenu: editPageDetails4,
                nestLevel: 5,
                order: 4,
            });
            await addServicesToYourFBPage5.populate("parentMenu");

            // Using Facebook > Pages > Customize a Page > Call-to-Action Buttons
            var addAnActionButton5 = await Menu.create({
                name: "Add an action button to your Facebook Page",
                parentMenu: callToActionBtns4,
                nestLevel: 5,
                order: 1,
            });
            await addAnActionButton5.populate("parentMenu");

            var editOrDeleteYourPages5 = await Menu.create({
                name: "Edit or delete your Page's action button",
                parentMenu: callToActionBtns4,
                nestLevel: 5,
                order: 2,
            });
            await editOrDeleteYourPages5.populate("parentMenu");

            // Using Facebook > Pages > Publishing > Basics
            var likeOrCommentOnAnother5 = await Menu.create({
                name: "Like or comment on another Page's post as your Page",
                parentMenu: basics4,
                nestLevel: 5,
                order: 1,
            });
            await likeOrCommentOnAnother5.populate("parentMenu");

            var sharePhotosOrVideos5 = await Menu.create({
                name: "Share photos or videos from your Facebook Page",
                parentMenu: basics4,
                nestLevel: 5,
                order: 2,
            });
            await sharePhotosOrVideos5.populate("parentMenu");

            var shareALinkFrom5 = await Menu.create({
                name: "Share a link from your Facebook Page",
                parentMenu: basics4,
                nestLevel: 5,
                order: 3,
            });
            await shareALinkFrom5.populate("parentMenu");

            var pinItemsToTheTop5 = await Menu.create({
                name: "Pin items to the top of your Facebook Page",
                parentMenu: basics4,
                nestLevel: 5,
                order: 4,
            });
            await pinItemsToTheTop5.populate("parentMenu");

            // Using Facebook > Pages > Publishing > Visibility & Editing
            var controlWhoCanSeeYourPagesPost5 = await Menu.create({
                name: "Control who can see your Page's posts on Facebook",
                parentMenu: visibilityAndEditing4,
                nestLevel: 5,
                order: 1,
            });
            await controlWhoCanSeeYourPagesPost5.populate("parentMenu");

            var removeOrHidePosts5 = await Menu.create({
                name: "Remove or hide posts from your Facebook page",
                parentMenu: visibilityAndEditing4,
                nestLevel: 5,
                order: 2,
            });
            await removeOrHidePosts5.populate("parentMenu");

            var editYourPagePost5 = await Menu.create({
                name: "Edit your Page post or see its edit history",
                parentMenu: visibilityAndEditing4,
                nestLevel: 5,
                order: 3,
            });
            await editYourPagePost5.populate("parentMenu");

            var howDoIChooseADate5 = await Menu.create({
                name: "How do I choose a date for my Facebook Page post to stop showing in News Feed?",
                parentMenu: visibilityAndEditing4,
                nestLevel: 5,
                order: 4,
            });
            await howDoIChooseADate5.populate("parentMenu");

            // Using Facebook > Pages > Publishing > Drafts & Scheduled Posts
            var createEditOrPublish5 = await Menu.create({
                name: "Create, edit, or publish a post draft for your Page",
                parentMenu: draftsAndScheduledPosts4,
                nestLevel: 5,
                order: 1,
            });
            await createEditOrPublish5.populate("parentMenu");

            var scheduleAPostAndManage5 = await Menu.create({
                name: "Schedule a post and manage scheduled posts for your Facebook Page",
                parentMenu: draftsAndScheduledPosts4,
                nestLevel: 5,
                order: 2,
            });
            await scheduleAPostAndManage5.populate("parentMenu");

            var changeTheDateOfYourFBPage5 = await Menu.create({
                name: "Change the date of your Facebook Page's posts",
                parentMenu: draftsAndScheduledPosts4,
                nestLevel: 5,
                order: 3,
            });
            await changeTheDateOfYourFBPage5.populate("parentMenu");

            // Using Facebook > Pages > Publishing > Events
            var createAnEvent5 = await Menu.create({
                name: "Create an event for your Facebook Page",
                parentMenu: events4,
                nestLevel: 5,
                order: 1,
            });
            await createAnEvent5.populate("parentMenu");

            var addOrRemoveAnotherPersons5 = await Menu.create({
                name: "Add or remove another person's or Page's Facebook event from your Page",
                parentMenu: events4,
                nestLevel: 5,
                order: 2,
            });
            await addOrRemoveAnotherPersons5.populate("parentMenu");

            // Using Facebook > Groups > Post, Participate, and Privacy > Post
            var postInAFBGroup5 = await Menu.create({
                name: "Post in a Facebook group",
                parentMenu: post4,
                nestLevel: 5,
                order: 1,
            });
            await postInAFBGroup5.populate("parentMenu");

            var formatYourPost5 = await Menu.create({
                name: "Format your post in a Facebook group",
                parentMenu: post4,
                nestLevel: 5,
                order: 2,
            });
            await formatYourPost5.populate("parentMenu");

            var postAnonymously5 = await Menu.create({
                name: "Post anonymously in a Facebook group",
                parentMenu: post4,
                nestLevel: 5,
                order: 3,
            });
            await postAnonymously5.populate("parentMenu");

            var createAReel5 = await Menu.create({
                name: "Create a reel in a Facebook group",
                parentMenu: post4,
                nestLevel: 5,
                order: 4,
            });
            await createAReel5.populate("parentMenu");

            // Using Facebook > Groups > Post, Participate, and Privacy > Participate
            var commentOnSomething5 = await Menu.create({
                name: "Comment on something you see on Facebook",
                parentMenu: participate4,
                nestLevel: 5,
                order: 1,
            });
            await commentOnSomething5.populate("parentMenu");

            var joinACommunityChat5 = await Menu.create({
                name: "Join a community chat in a Facebook group",
                parentMenu: participate4,
                nestLevel: 5,
                order: 2,
            });
            await joinACommunityChat5.populate("parentMenu");

            var earnATopContributor5 = await Menu.create({
                name: "Earn a top contributor badge in a Facebook group",
                parentMenu: participate4,
                nestLevel: 5,
                order: 3,
            });
            await earnATopContributor5.populate("parentMenu");

            var awardAPostOrComment5 = await Menu.create({
                name: "Award a post or comment in a Facebook group",
                parentMenu: participate4,
                nestLevel: 5,
                order: 4,
            });
            await awardAPostOrComment5.populate("parentMenu");

            // Using Facebook > Groups > Post, Participate, and Privacy > Privacy
            var differencesBetweenPublic5_1 = await Menu.create({
                name: "Differences between public and private Facebook groups",
                parentMenu: privacy4,
                nestLevel: 5,
                order: 1,
            });
            await differencesBetweenPublic5_1.populate("parentMenu");

            var changeAFacebookGroup5 = await Menu.create({
                name: "Change a Facebook group from public to private",
                parentMenu: privacy4,
                nestLevel: 5,
                order: 2,
            });
            await changeAFacebookGroup5.populate("parentMenu");

            var hideOrUnhide5 = await Menu.create({
                name: "Hide or unhide a private",
                parentMenu: privacy4,
                nestLevel: 5,
                order: 3,
            });
            await hideOrUnhide5.populate("parentMenu");

            var checkIfAFBGroup5 = await Menu.create({
                name: "Check if a Facebook group is public or private",
                parentMenu: privacy4,
                nestLevel: 5,
                order: 4,
            });
            await checkIfAFBGroup5.populate("parentMenu");

            // Using Facebook > Groups > Post, Participate, and Privacy > Buy and Sell Groups
            var howBuyAndSellGroups5 = await Menu.create({
                name: "How buy and sell groups differ from regular Facebook groups",
                parentMenu: buyAndSellGroups4,
                nestLevel: 5,
                order: 1,
            });
            await howBuyAndSellGroups5.populate("parentMenu");

            var sellSomethinginAFB5 = await Menu.create({
                name: "Sell something in a Facebook buy and sell group",
                parentMenu: buyAndSellGroups4,
                nestLevel: 5,
                order: 2,
            });
            await sellSomethinginAFB5.populate("parentMenu");

            var editYourListing5 = await Menu.create({
                name: "Edit your listing in a Facebook buy and sell group",
                parentMenu: buyAndSellGroups4,
                nestLevel: 5,
                order: 3,
            });
            await editYourListing5.populate("parentMenu");

            var markSomethingAsSold5 = await Menu.create({
                name: "Mark something as sold in a Facebook buy and sell group",
                parentMenu: buyAndSellGroups4,
                nestLevel: 5,
                order: 4,
            });
            await markSomethingAsSold5.populate("parentMenu");

            // Using Facebook > Groups > Create, Engage, and Manage Settings > Create
            var createAFBGroup5 = await Menu.create({
                name: "Create a Facebook group",
                parentMenu: create4,
                nestLevel: 5,
                order: 1,
            });
            await createAFBGroup5.populate("parentMenu");

            var differencesBetweenPublic5_2 = await Menu.create({
                name: "Differences between public and private Facebook groups",
                parentMenu: create4,
                nestLevel: 5,
                order: 2,
            });
            await differencesBetweenPublic5_2.populate("parentMenu");

            var addAnAdmin5 = await Menu.create({
                name: "Add an admin or moderator to your Facebook group",
                parentMenu: create4,
                nestLevel: 5,
                order: 3,
            });
            await addAnAdmin5.populate("parentMenu");

            var changeTheColor5 = await Menu.create({
                name: "Change the color of a Facebook group you admin",
                parentMenu: create4,
                nestLevel: 5,
                order: 4,
            });
            await changeTheColor5.populate("parentMenu");

            // Using Facebook > Groups > Create, Engage, and Manage Settings > Manage Group Settings
            var manageMembership5 = await Menu.create({
                name: "Manage membership for your Facebook group",
                parentMenu: manageGroupSettings4,
                nestLevel: 5,
                order: 1,
            });
            await manageMembership5.populate("parentMenu");

            var managePosts5 = await Menu.create({
                name: "Manage posts for your Facebook group",
                parentMenu: manageGroupSettings4,
                nestLevel: 5,
                order: 2,
            });
            await managePosts5.populate("parentMenu");

            var addAndManageFeatures5_1 = await Menu.create({
                name: "Add and manage features for a Facebook group you admin",
                parentMenu: manageGroupSettings4,
                nestLevel: 5,
                order: 3,
            });
            await addAndManageFeatures5_1.populate("parentMenu");

            var sortPostsInAFBGroup = await Menu.create({
                name: "Sort posts in a Facebook group you admin",
                parentMenu: manageGroupSettings4,
                nestLevel: 5,
                order: 4,
            });
            await sortPostsInAFBGroup.populate("parentMenu");

            // Using Facebook > Groups > Create, Engage, and Manage Settings > Manage Group Features
            var addAndManageFeatures5_2 = await Menu.create({
                name: "Add and manage features for a Facebook group you admin",
                parentMenu: manageGroupFeatures4,
                nestLevel: 5,
                order: 1,
            });
            await addAndManageFeatures5_2.populate("parentMenu");

            var manageCommunityChats5 = await Menu.create({
                name: "Manage community chats in a Facebook group you admin",
                parentMenu: manageGroupFeatures4,
                nestLevel: 5,
                order: 2,
            });
            await manageCommunityChats5.populate("parentMenu");

            var addOrRemoveTheFBBuy5 = await Menu.create({
                name: "Add or remove the Facebook buy and sell feature set in your Facebook group",
                parentMenu: manageGroupFeatures4,
                nestLevel: 5,
                order: 3,
            });
            await addOrRemoveTheFBBuy5.populate("parentMenu");

            var addOrRemoveAnApp5 = await Menu.create({
                name: "Add or remove an app from a Facebook group you admin",
                parentMenu: manageGroupFeatures4,
                nestLevel: 5,
                order: 4,
            });
            await addOrRemoveAnApp5.populate("parentMenu");

            // Using Facebook > Groups > Create, Engage, and Manage Settings > Engage
            var welcomeNewMembers5 = await Menu.create({
                name: "Welcome new members to a Facebook group you manage",
                parentMenu: engage4,
                nestLevel: 5,
                order: 1,
            });
            await welcomeNewMembers5.populate("parentMenu");

            var scheduleAPostInAFBGroup5 = await Menu.create({
                name: "Schedule a post in a Facebook group you manage",
                parentMenu: engage4,
                nestLevel: 5,
                order: 2,
            });
            await scheduleAPostInAFBGroup5.populate("parentMenu");

            var createACommunityChat5 = await Menu.create({
                name: "Create a community chat in a Facebook group",
                parentMenu: engage4,
                nestLevel: 5,
                order: 3,
            });
            await createACommunityChat5.populate("parentMenu");

            var attachACommunityChat5 = await Menu.create({
                name: "Attach a community chat to your Facebook group post",
                parentMenu: engage4,
                nestLevel: 5,
                order: 4,
            });
            await attachACommunityChat5.populate("parentMenu");

            // Using Facebook > Groups > Manage People and Content > Manage People
            var setUpAdminAssist5 = await Menu.create({
                name: "Set up Admin Assist to automatically manage your Facebook group",
                parentMenu: managePeople4,
                nestLevel: 5,
                order: 1,
            });
            await setUpAdminAssist5.populate("parentMenu");

            var turnBadgesOnOrOff5 = await Menu.create({
                name: "Turn badges on or off in a Facebook group you manage",
                parentMenu: managePeople4,
                nestLevel: 5,
                order: 2,
            });
            await turnBadgesOnOrOff5.populate("parentMenu");

            var seeTheMembersOfAFBGroup5 = await Menu.create({
                name: "See the members of a Facebook group",
                parentMenu: managePeople4,
                nestLevel: 5,
                order: 3,
            });
            await seeTheMembersOfAFBGroup5.populate("parentMenu");

            var whatItMeansThatAFBGroup5 = await Menu.create({
                name: "What it means that a Facebook group member is unavailable",
                parentMenu: managePeople4,
                nestLevel: 5,
                order: 4,
            });
            await whatItMeansThatAFBGroup5.populate("parentMenu");

            // Using Facebook > Groups > Manage People and Content > Manage Content
            var chooseWhatPeople5 = await Menu.create({
                name: "Choose what people can post in a Facebook group you admin",
                parentMenu: manageContent4,
                nestLevel: 5,
                order: 1,
            });
            await chooseWhatPeople5.populate("parentMenu");

            var managePostsForYourFBGroup5 = await Menu.create({
                name: "Manage posts for your Facebook group",
                parentMenu: manageContent4,
                nestLevel: 5,
                order: 2,
            });
            await managePostsForYourFBGroup5.populate("parentMenu");

            var sortPostsInAFBGroup5 = await Menu.create({
                name: "Sort posts in a Facebook group you admin",
                parentMenu: manageContent4,
                nestLevel: 5,
                order: 3,
            });
            await sortPostsInAFBGroup5.populate("parentMenu");

            var whyAFBGroupPost5 = await Menu.create({
                name: "Why a Facebook group post is empty",
                parentMenu: manageContent4,
                nestLevel: 5,
                order: 4,
            });
            await whyAFBGroupPost5.populate("parentMenu");

            // Using Facebook > Groups > Manage People and Content > Enforce and Moderate
            var removeBanOrUnban5 = await Menu.create({
                name: "Remove, ban, or unban someone in a Facebook group you manage",
                parentMenu: enforceAndModerate4,
                nestLevel: 5,
                order: 1,
            });
            await removeBanOrUnban5.populate("parentMenu");

            var suspendSomeone5 = await Menu.create({
                name: "Suspend someone in a Facebook group you manage",
                parentMenu: enforceAndModerate4,
                nestLevel: 5,
                order: 2,
            });
            await suspendSomeone5.populate("parentMenu");

            var removeAPostInAFBGroup5 = await Menu.create({
                name: "Remove a post in a Facebook group you manage",
                parentMenu: enforceAndModerate4,
                nestLevel: 5,
                order: 3,
            });
            await removeAPostInAFBGroup5.populate("parentMenu");

            var turnOffPostComments5 = await Menu.create({
                name: "Turn off post comments or comment replies in a Facebook group",
                parentMenu: enforceAndModerate4,
                nestLevel: 5,
                order: 4,
            });

            // Using Facebook > Groups > Manage People and Content > Admin and Moderator Team
            var differenceBetweenAdmin5 = await Menu.create({
                name: "Difference between admin and moderator of a Facebook group",
                parentMenu: adminAndModeratorTeam4,
                nestLevel: 5,
                order: 1,
            });
            await differenceBetweenAdmin5.populate("parentMenu");

            var addAnAdminOrModerator5 = await Menu.create({
                name: "Add an admin or moderator to your Facebook group",
                parentMenu: adminAndModeratorTeam4,
                nestLevel: 5,
                order: 2,
            });
            await addAnAdminOrModerator5.populate("parentMenu");

            var removeAnAdminOrModerator5 = await Menu.create({
                name: "Remove an admin or moderator from your Facebook group",
                parentMenu: adminAndModeratorTeam4,
                nestLevel: 5,
                order: 3,
            });
            await removeAnAdminOrModerator5.populate("parentMenu");

            var chatWithOtherAdmins5 = await Menu.create({
                name: "Chat with other admins and moderators in your Facebook group",
                parentMenu: adminAndModeratorTeam4,
                nestLevel: 5,
                order: 4,
            });
            await chatWithOtherAdmins5.populate("parentMenu");

            // Using Facebook > Groups > Community Chats > Get started
            var findAFBGroups5 = await Menu.create({
                name: "Find a Facebook group's community chat",
                parentMenu: getStarted4,
                nestLevel: 5,
                order: 1,
            });
            await findAFBGroups5.populate("parentMenu");

            var createACommunityChat5_2 = await Menu.create({
                name: "Create a community chat in a Facebook group",
                parentMenu: getStarted4,
                nestLevel: 5,
                order: 2,
            });
            await createACommunityChat5_2.populate("parentMenu");

            var privacyAndSafety5 = await Menu.create({
                name: "Privacy and safety in community chats",
                parentMenu: getStarted4,
                nestLevel: 5,
                order: 3,
            });
            await privacyAndSafety5.populate("parentMenu");

            var accessToCommunity5 = await Menu.create({
                name: "Access to community chats for Facebook groups",
                parentMenu: getStarted4,
                nestLevel: 5,
                order: 4,
            });
            await accessToCommunity5.populate("parentMenu");

            // Using Facebook > Groups > Community Chats > Use community chats
            var joinACommunityChat5_2 = await Menu.create({
                name: "Join a community chat in a Facebook group",
                parentMenu: useCommunityChats4,
                nestLevel: 5,
                order: 1,
            });
            await joinACommunityChat5_2.populate("parentMenu");

            var addSomeoneToYourFacebooks5 = await Menu.create({
                name: "Add someone to your Facebook group's community chat",
                parentMenu: useCommunityChats4,
                nestLevel: 5,
                order: 2,
            });
            await addSomeoneToYourFacebooks5.populate("parentMenu");

            var manageCommunityChatNotifs5 = await Menu.create({
                name: "Manage community chat notifications on Messenger",
                parentMenu: useCommunityChats4,
                nestLevel: 5,
                order: 3,
            });
            await manageCommunityChatNotifs5.populate("parentMenu");

            var leaveACommunityChatOnMessenger5 = await Menu.create({
                name: "Leave a community chat on Messenger or Facebook",
                parentMenu: useCommunityChats4,
                nestLevel: 5,
                order: 4,
            });
            await leaveACommunityChatOnMessenger5.populate("parentMenu");

            // Using Facebook > Groups > Community Chats > Manage community chats
            var addOrRemoveCommunityChat5 = await Menu.create({
                name: "Add or remove community chat admins and moderators",
                parentMenu: manageCommunityChats4,
                nestLevel: 5,
                order: 1,
            });
            await addOrRemoveCommunityChat5.populate("parentMenu");

            var deleteACommunityChat5 = await Menu.create({
                name: "Delete a community chat on Messenger or Facebook",
                parentMenu: manageCommunityChats4,
                nestLevel: 5,
                order: 2,
            });
            await deleteACommunityChat5.populate("parentMenu");

            var createCategories5 = await Menu.create({
                name: "Create categories for your community chats",
                parentMenu: manageCommunityChats4,
                nestLevel: 5,
                order: 3,
            });
            await createCategories5.populate("parentMenu");

            var attachACommunityChat5_2 = await Menu.create({
                name: "Attach a community chat to your Facebook group posts",
                parentMenu: manageCommunityChats4,
                nestLevel: 5,
                order: 4,
            });
            await attachACommunityChat5_2.populate("parentMenu");
        } catch (err) {
            console.error(err);
        }

        console.log("facebook-help-center db repopulated successfully");
    } catch (err) {
        console.error(err);
        process.exit();
    }

    try {
        await disconnect();
    } catch (err) {
        console.error(err);
    }
}

main();
