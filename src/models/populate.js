import { connect, disconnect } from "./db.js";
import mongoose from "mongoose";
import Menu from "./menu.js";

async function main() {
    try {
        await connect();

        // https://mongoosejs.com/docs/api/model.html#Model.startSession()
        // note: need to convert all Menu.create object argument to an array containing the object 
        const session = await Menu.startSession({causalConsistency: true});

        // drop collection first
        try {
            await mongoose.connection.db.dropDatabase();
            console.log("facebook-help-center db dropped successfully.");
        } catch (err) {
            console.error(err);
        }

        // populate nesting 1
        try {
            var usingFacebook1 = (await Menu.create([{
                name: "Using Facebook",
                nestLevel: 1,
                order: 1,
            }], { session }))[0];

            var managingAccount1 = (await Menu.create([{
                name: "Managing Your Account",
                nestLevel: 1,
                order: 2,
            }], { session }))[0];

            var privacy1 = (await Menu.create([{
                name: "Privacy, Safety, and Security",
                nestLevel: 1,
                order: 3,
            }], { session }))[0];

            var policies1 = (await Menu.create([{
                name: "Policies and Reporting",
                nestLevel: 1,
                order: 4,
            }], { session }))[0];
        } catch (err) {
            console.error(err);
        }

        // populate nesting 2

        try {
            // using facebook
            var yourProfile2 = (await Menu.create([{
                name: "Your Profile",
                parentMenu: usingFacebook1,
                nestLevel: 2,
                order: 1,
            }], { session }))[0];

            var messaging2 = (await Menu.create([{
                name: "Messaging",
                parentMenu: usingFacebook1,
                nestLevel: 2,
                order: 2,
            }], { session }))[0];

            var pages2 = (await Menu.create([{
                name: "Pages",
                parentMenu: usingFacebook1,
                nestLevel: 2,
                order: 3,
            }], { session }))[0];

            var groups2 = (await Menu.create([{
                name: "Groups",
                parentMenu: usingFacebook1,
                nestLevel: 2,
                order: 4,
            }], { session }))[0];

            // managing your account
            var loginAndPassword2 = (await Menu.create([{
                name: "Login and Password",
                parentMenu: managingAccount1,
                nestLevel: 2,
                order: 1,
            }], { session }))[0];

            var accountSettings2 = (await Menu.create([{
                name: "Account Settings",
                parentMenu: managingAccount1,
                nestLevel: 2,
                order: 2,
            }], { session }))[0];

            var notifications2 = (await Menu.create([{
                name: "Notifications",
                parentMenu: managingAccount1,
                nestLevel: 2,
                order: 3,
            }], { session }))[0];

            var adPreferences2 = (await Menu.create([{
                name: "Ad Preferences",
                parentMenu: managingAccount1,
                nestLevel: 2,
                order: 4,
            }], { session }))[0];

            // privacy, safety, and security
            var yourPrivacy2 = (await Menu.create([{
                name: "Your Privacy",
                parentMenu: privacy1,
                nestLevel: 2,
                order: 1,
            }], { session }))[0];

            var stayingSafe2 = (await Menu.create([{
                name: "Staying Safe",
                parentMenu: privacy1,
                nestLevel: 2,
                order: 2,
            }], { session }))[0];

            var keepingYourAccount2 = (await Menu.create([{
                name: "Keeping Your Account Secure",
                parentMenu: privacy1,
                nestLevel: 2,
                order: 3,
            }], { session }))[0];

            var shoppingSafety2 = (await Menu.create([{
                name: "Shopping Safety",
                parentMenu: privacy1,
                nestLevel: 2,
                order: 4,
            }], { session }))[0];

            // policies and reporting
            var reportingAbuse2 = (await Menu.create([{
                name: "Reporting Abuse",
                parentMenu: policies1,
                nestLevel: 2,
                order: 1,
            }], { session }))[0];

            var reportingAProblem2 = (await Menu.create([{
                name: "Reporting a Problem with Facebook",
                parentMenu: policies1,
                nestLevel: 2,
                order: 2,
            }], { session }))[0];

            var beingYourAuthentic2 = (await Menu.create([{
                name: "Being Your Authentic Self on Facebook",
                parentMenu: policies1,
                nestLevel: 2,
                order: 4,
            }], { session }))[0];

            var hackedAndFakeAccounts2 = (await Menu.create([{
                name: "Hacked and Fake Accounts",
                parentMenu: policies1,
                nestLevel: 2,
                order: 3,
            }], { session }))[0];
        } catch (err) {
            console.error(err);
        }

        // populate nesting 3

        // using facebook
        try {
            // your profile
            var addAndEditYourProfile3 = (await Menu.create([{
                name: "Add and Edit Your Profile Info",
                parentMenu: yourProfile2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var yourProfilePicture3 = (await Menu.create([{
                name: "Your Profile Picture and Cover Photo",
                parentMenu: yourProfile2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var shareAndManagePosts3 = (await Menu.create([{
                name: "Share and Manage Posts on Your Profile",
                parentMenu: yourProfile2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            // messaging
            var sendMessages3 = (await Menu.create([{
                name: "Send Messages",
                parentMenu: messaging2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var viewAndManageMessages3 = (await Menu.create([{
                name: "View and Manage Messages",
                parentMenu: messaging2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var reportAMessage3 = (await Menu.create([{
                name: "Report a Message",
                parentMenu: messaging2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            var videoCalling3 = (await Menu.create([{
                name: "Video Calling",
                parentMenu: messaging2,
                nestLevel: 3,
                order: 4,
            }], { session }))[0];

            // pages
            var createAndManageAPage3 = (await Menu.create([{
                name: "Create and Manage a Page",
                parentMenu: pages2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var managePageSettings3 = (await Menu.create([{
                name: "Manage Page Settings",
                parentMenu: pages2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var customizeAPage3 = (await Menu.create([{
                name: "Customize a Page",
                parentMenu: pages2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            var publishing3 = (await Menu.create([{
                name: "Publishing",
                parentMenu: pages2,
                nestLevel: 3,
                order: 4,
            }], { session }))[0];

            // groups
            var postParticipate3 = (await Menu.create([{
                name: "Post, Participate, and Privacy",
                parentMenu: groups2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var createEngage3 = (await Menu.create([{
                name: "Create, Engage, and Manage Settings",
                parentMenu: groups2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var managePeopleAndContent3 = (await Menu.create([{
                name: "Manage People and Content",
                parentMenu: groups2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            var communityChats3 = (await Menu.create([{
                name: "Community Chats",
                parentMenu: groups2,
                nestLevel: 3,
                order: 4,
            }], { session }))[0];
        } catch (err) {
            console.error(err);
        }

        // managing your account

        try {
            // login and password
            var logIntoYourAccount3 = (await Menu.create([{
                name: "Log Into Your Account",
                parentMenu: loginAndPassword2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var changeYourPassword3 = (await Menu.create([{
                name: "Change Your Password",
                parentMenu: loginAndPassword2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var fixALoginProblem3 = (await Menu.create([{
                name: "Fix a Login Problem",
                parentMenu: loginAndPassword2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            var uploadingYourID3 = (await Menu.create([{
                name: "Uploading Your ID",
                parentMenu: loginAndPassword2,
                nestLevel: 3,
                order: 4,
            }], { session }))[0];

            // account settings
            var adjustYourAccountSettings3 = (await Menu.create([{
                name: "Adjust Your Account Settings",
                parentMenu: accountSettings2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var connectToFacebookWithout3 = (await Menu.create([{
                name: "Connect to Facebook Without Data Charges",
                parentMenu: accountSettings2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var yourUsername3 = (await Menu.create([{
                name: "Your Username",
                parentMenu: accountSettings2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            var legacyContacts3 = (await Menu.create([{
                name: "Legacy Contacts",
                parentMenu: accountSettings2,
                nestLevel: 3,
                order: 4,
            }], { session }))[0];

            // notifications
            var pushEmailAndText3 = (await Menu.create([{
                name: "Push, Email, and Text Notifications",
                parentMenu: notifications2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var chooseWhatYoureNotified3 = (await Menu.create([{
                name: "Choose What You're Notified About",
                parentMenu: notifications2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var fixAProblem3 = (await Menu.create([{
                name: "Fix a Problem",
                parentMenu: notifications2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            // ad preferences
            var howAdsWork3 = (await Menu.create([{
                name: "How Ads Work on Facebook",
                parentMenu: adPreferences2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var controlTheAds3 = (await Menu.create([{
                name: "Control the Ads You See",
                parentMenu: adPreferences2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var yourInfoAndFacebook3 = (await Menu.create([{
                name: "Your Info and Facebook Ads",
                parentMenu: adPreferences2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];
        } catch (err) {
            console.error(err);
        }

        // privacy, safety, and security
        try {
            // your privacy
            var controlWhoCanSee3 = (await Menu.create([{
                name: "Control who can see what you share on Facebook",
                parentMenu: yourPrivacy2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var manageWhatYouveShared3 = (await Menu.create([{
                name: "Manage What You've Shared",
                parentMenu: yourPrivacy2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var controlWhoCanFindYou3 = (await Menu.create([{
                name: "Control Who Can Find You",
                parentMenu: yourPrivacy2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            // staying safe
            var abuseResources3 = (await Menu.create([{
                name: "Abuse Resources",
                parentMenu: stayingSafe2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var suicideAndSelfInjury3 = (await Menu.create([{
                name: "Suicide and Self-Injury Resources",
                parentMenu: stayingSafe2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var crisisResponse3 = (await Menu.create([{
                name: "Crisis Response",
                parentMenu: stayingSafe2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            var safetyResourcesForParents3 = (await Menu.create([{
                name: "Safety Resources for Parents",
                parentMenu: stayingSafe2,
                nestLevel: 3,
                order: 4,
            }], { session }))[0];

            // keeping your account secure
            var securityFeatures3 = (await Menu.create([{
                name: "Security Features and Tips",
                parentMenu: keepingYourAccount2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var loginAlertsAnd3 = (await Menu.create([{
                name: "Login Alerts and Two-Factor Authentication",
                parentMenu: keepingYourAccount2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var avoidSpamAndScams3 = (await Menu.create([{
                name: "Avoid Spam and Scams",
                parentMenu: keepingYourAccount2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            // shopping safety
            var recognizingScams3 = (await Menu.create([{
                name: "Recognizing Scams",
                parentMenu: shoppingSafety2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var avoidingScams3 = (await Menu.create([{
                name: "Avoiding Scams",
                parentMenu: shoppingSafety2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var buyingOnMarketplace3 = (await Menu.create([{
                name: "Buying on Marketplace",
                parentMenu: shoppingSafety2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            var tipsForShoppingSafely3 = (await Menu.create([{
                name: "Tips for Shopping Safely",
                parentMenu: shoppingSafety2,
                nestLevel: 3,
                order: 4,
            }], { session }))[0];
        } catch (err) {
            console.error(err);
        }

        // policies and reporting
        try {
            // reporting abuse
            var reportContentOnFacebook3 = (await Menu.create([{
                name: "Report Content on Facebook",
                parentMenu: reportingAbuse2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var dontHaveAnAccount3 = (await Menu.create([{
                name: "Don't Have an Account?",
                parentMenu: reportingAbuse2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            // reporting a problem with facebook
            var somethingIsntWorking3 = (await Menu.create([{
                name: "Something Isn't Working",
                parentMenu: reportingAProblem2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var reportAbusiveContent3 = (await Menu.create([{
                name: "Report Abusive Content",
                parentMenu: reportingAProblem2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var giveUsFeedback3 = (await Menu.create([{
                name: "Give Us Feedback",
                parentMenu: reportingAProblem2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            // being your authentic self on facebook
            var verifyingYourIdentity3 = (await Menu.create([{
                name: "Verifying your identity",
                parentMenu: beingYourAuthentic2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var updatingYourProfileInfo3 = (await Menu.create([{
                name: "Updating your profile information",
                parentMenu: beingYourAuthentic2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var stayingSafeOnFacebook3 = (await Menu.create([{
                name: "Staying safe on Facebook",
                parentMenu: beingYourAuthentic2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            var metaPay3 = (await Menu.create([{
                name: "Meta Pay",
                parentMenu: beingYourAuthentic2,
                nestLevel: 3,
                order: 4,
            }], { session }))[0];

            // hacked and fake accounts
            var hackedAccounts3 = (await Menu.create([{
                name: "Hacked Accounts",
                parentMenu: hackedAndFakeAccounts2,
                nestLevel: 3,
                order: 1,
            }], { session }))[0];

            var impersonationAccounts3 = (await Menu.create([{
                name: "Impersonation Accounts",
                parentMenu: hackedAndFakeAccounts2,
                nestLevel: 3,
                order: 2,
            }], { session }))[0];

            var fakeAccounts3 = (await Menu.create([{
                name: "Fake Accounts",
                parentMenu: hackedAndFakeAccounts2,
                nestLevel: 3,
                order: 3,
            }], { session }))[0];

            // Using Facebook > Your Profile > Add and Edit Your Profile Info
            var basicProfileInfo4 = (await Menu.create([{
                name: "Basic Profile Information",
                parentMenu: addAndEditYourProfile3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var aboutSectionProfile4 = (await Menu.create([{
                name: "About Section of your Profile",
                parentMenu: addAndEditYourProfile3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var professionalMode4 = (await Menu.create([{
                name: "Professional mode",
                parentMenu: addAndEditYourProfile3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            // Using Facebook > Your Profile > Your Profile Picture and Cover Photo
            var addOrChangeFBPFP4 = (await Menu.create([{
                name: "Add or change your Facebook profile picture",
                parentMenu: yourProfilePicture3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var howDoIEditFBPFPThumb4 = (await Menu.create([{
                name: "How do I edit my Facebook profile picture thumbnail?",
                parentMenu: yourProfilePicture3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var howDoISeeOldProfileVids4 = (await Menu.create([{
                name: "How do I see old profile videos on Facebook?",
                parentMenu: yourProfilePicture3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howDoIAddFrameToPhoto4 = (await Menu.create([{
                name: "How do I add a frame to a photo, or remove a frame on Facebook?",
                parentMenu: yourProfilePicture3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Your Profile > Share and Manage Posts on Your Profile
            var howDoIShareSomething4 = (await Menu.create([{
                name: "How do I share something on Facebook?",
                parentMenu: shareAndManagePosts3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var turnOnTimelineReview4 = (await Menu.create([{
                name: "How do I share something on Facebook?",
                parentMenu: shareAndManagePosts3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var stopPeopleFromPosting4 = (await Menu.create([{
                name: "Stop people from posting on your Facebook profile",
                parentMenu: shareAndManagePosts3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howDoIPostSomething4 = (await Menu.create([{
                name: "How do I post something on someone else's Facebook timeline?",
                parentMenu: shareAndManagePosts3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Messaging > Send Messages
            var sendMessages4 = (await Menu.create([{
                name: "Send Messages",
                parentMenu: sendMessages3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var deleting4 = (await Menu.create([{
                name: "Deleting",
                parentMenu: sendMessages3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var groupConversations4 = (await Menu.create([{
                name: "Group Conversations",
                parentMenu: sendMessages3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var messagingPagesEvents4 = (await Menu.create([{
                name: "Messaging Pages, Events, and Groups",
                parentMenu: sendMessages3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Messaging > View and Manage Messages
            var viewMessages4 = (await Menu.create([{
                name: "View Messages",
                parentMenu: viewAndManageMessages3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var deleteAndArchive4 = (await Menu.create([{
                name: "Delete and Archive Messages",
                parentMenu: viewAndManageMessages3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Messaging > Report a Message
            var whatToDoIfSomeonesBothering4 = (await Menu.create([{
                name: "What to do if someone's bothering you in messages on Facebook",
                parentMenu: reportAMessage3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var blockMessagesFromAProfile4 = (await Menu.create([{
                name: "Block messages from a profile on Facebook",
                parentMenu: reportAMessage3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var reportAMessageOnFBAsSpam4 = (await Menu.create([{
                name: "Report a message on Facebook as spam",
                parentMenu: reportAMessage3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howToHandleBullying4 = (await Menu.create([{
                name: "How to handle bullying, harassment, or personal attack on Facebook",
                parentMenu: reportAMessage3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > messaging > Video Calling
            var calling4 = (await Menu.create([{
                name: "Calling",
                parentMenu: videoCalling3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var rooms4 = (await Menu.create([{
                name: "Rooms",
                parentMenu: videoCalling3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Pages > Create and Manage a Page
            var createAFacebookPage4 = (await Menu.create([{
                name: "Create a Facebook Page",
                parentMenu: createAndManageAPage3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var mergeFacebookPages4 = (await Menu.create([{
                name: "Merge Facebook Pages",
                parentMenu: createAndManageAPage3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var inviteFriends4 = (await Menu.create([{
                name: "Invite friends",
                parentMenu: createAndManageAPage3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var deleteOrDeactivate4 = (await Menu.create([{
                name: "Delete or deactivate your Page",
                parentMenu: createAndManageAPage3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Manage Page Settings
            var pageRoles4 = (await Menu.create([{
                name: "Page Roles",
                parentMenu: managePageSettings3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var privacyAndVisibility4 = (await Menu.create([{
                name: "Privacy and Visibility Settings",
                parentMenu: managePageSettings3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var connectAPage4 = (await Menu.create([{
                name: "Connect a Page",
                parentMenu: managePageSettings3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            // Using Facebook > Pages > Customize a Page
            var profilePicturesAndCover4 = (await Menu.create([{
                name: "Profile Pictures and Cover Photos",
                parentMenu: customizeAPage3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var categoriesAndTemplates4 = (await Menu.create([{
                name: "Categories and Templates",
                parentMenu: customizeAPage3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var editPageDetails4 = (await Menu.create([{
                name: "Edit Page Details",
                parentMenu: customizeAPage3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var callToActionBtns4 = (await Menu.create([{
                name: "Call-to-Action Buttons",
                parentMenu: customizeAPage3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Publishing
            var basics4 = (await Menu.create([{
                name: "Basics",
                parentMenu: publishing3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var visibilityAndEditing4 = (await Menu.create([{
                name: "Visibility & Editing",
                parentMenu: publishing3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var draftsAndScheduledPosts4 = (await Menu.create([{
                name: "Drafts & Scheduled Posts",
                parentMenu: publishing3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var events4 = (await Menu.create([{
                name: "Events",
                parentMenu: publishing3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Post, Participate, and Privacy
            var post4 = (await Menu.create([{
                name: "Post",
                parentMenu: postParticipate3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var participate4 = (await Menu.create([{
                name: "Participate",
                parentMenu: postParticipate3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var privacy4 = (await Menu.create([{
                name: "Privacy",
                parentMenu: postParticipate3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var buyAndSellGroups4 = (await Menu.create([{
                name: "Buy and Sell Groups",
                parentMenu: postParticipate3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Create, Engage, and Manage Settings
            var create4 = (await Menu.create([{
                name: "Create",
                parentMenu: createEngage3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var manageGroupSettings4 = (await Menu.create([{
                name: "Manage Group Settings",
                parentMenu: createEngage3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var manageGroupFeatures4 = (await Menu.create([{
                name: "Manage Group Features",
                parentMenu: createEngage3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var engage4 = (await Menu.create([{
                name: "Engage",
                parentMenu: createEngage3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Manage People and Content
            var managePeople4 = (await Menu.create([{
                name: "Manage People",
                parentMenu: managePeopleAndContent3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var manageContent4 = (await Menu.create([{
                name: "Manage Content",
                parentMenu: managePeopleAndContent3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var enforceAndModerate4 = (await Menu.create([{
                name: "Enforce and Moderate",
                parentMenu: managePeopleAndContent3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var adminAndModeratorTeam4 = (await Menu.create([{
                name: "Admin and Moderator Team",
                parentMenu: managePeopleAndContent3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Community Chats
            var getStarted4 = (await Menu.create([{
                name: "Get started",
                parentMenu: communityChats3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var useCommunityChats4 = (await Menu.create([{
                name: "Use community chats",
                parentMenu: communityChats3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var manageCommunityChats4 = (await Menu.create([{
                name: "Manage community chats",
                parentMenu: communityChats3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            // Managing Your Account > Login and Password > Log Into Your Account
            var logIntoYourFBAcct4 = (await Menu.create([{
                name: "Log into your Facebook account",
                parentMenu: logIntoYourAccount3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var logOutOfFB4 = (await Menu.create([{
                name: "Log out of Facebook",
                parentMenu: logIntoYourAccount3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var addOrRemovedSaved4 = (await Menu.create([{
                name: "Add or remove a saved account from your phone",
                parentMenu: logIntoYourAccount3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var iDontKnowifI4 = (await Menu.create([{
                name: "I don't know if I still have a Facebook account",
                parentMenu: logIntoYourAccount3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Login and Password > Change Your Password
            var changeOrReset4 = (await Menu.create([{
                name: "Change or reset your Facebook password",
                parentMenu: changeYourPassword3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var makeAStrongFBPW4 = (await Menu.create([{
                name: "Make a strong Facebook password",
                parentMenu: changeYourPassword3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var canYouSendMe4 = (await Menu.create([{
                name: "Can you send me a copy of my Facebook password without resetting it?",
                parentMenu: changeYourPassword3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var getAOneTimePW4 = (await Menu.create([{
                name: "Get a one-time password to log into Facebook",
                parentMenu: changeYourPassword3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Login and Password > Fix a Login Problem
            var loginHelp4 = (await Menu.create([{
                name: "Login Help",
                parentMenu: fixALoginProblem3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var passwordHelp4 = (await Menu.create([{
                name: "Password Help",
                parentMenu: fixALoginProblem3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            // Managing Your Account > Login and Password > Uploading Your ID
            var typesOfIDs4 = (await Menu.create([{
                name: "Types of IDs that Facebook accepts",
                parentMenu: uploadingYourID3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var howToUploadAnID4 = (await Menu.create([{
                name: "How to upload an ID to Facebook",
                parentMenu: uploadingYourID3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var whyFacebookMayAsk4 = (await Menu.create([{
                name: "Why Facebook may ask you to upload an ID",
                parentMenu: uploadingYourID3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var whatHappensToYourID4 = (await Menu.create([{
                name: "What happens to your ID after you send it to Facebook",
                parentMenu: uploadingYourID3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Account Settings > Adjust Your Account Settings
            var findYourFBSettings4 = (await Menu.create([{
                name: "Find your Facebook settings",
                parentMenu: adjustYourAccountSettings3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var howToChangeYourLanguage4 = (await Menu.create([{
                name: "How to change your language settings on Facebook",
                parentMenu: adjustYourAccountSettings3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var addOrRemoveAnEmail4 = (await Menu.create([{
                name: "Add or remove an email from your Facebook account",
                parentMenu: adjustYourAccountSettings3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var addOrRemoveAMobilePhoneNo4 = (await Menu.create([{
                name: "Add or remove a mobile phone number from your Facebook account",
                parentMenu: adjustYourAccountSettings3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Account Settings > Connect to Facebook Without Data Charges
            var usingBasicMode4 = (await Menu.create([{
                name: "Using basic mode",
                parentMenu: connectToFacebookWithout3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            // Managing Your Account > Account Settings > Your Username
            var howUsernamesAndUserIDs4 = (await Menu.create([{
                name: "How usernames and user IDs are used on Facebook Profiles",
                parentMenu: yourUsername3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var guidelinesForCreating4 = (await Menu.create([{
                name: "Guidelines for creating a custom username or screen name on Facebook",
                parentMenu: yourUsername3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var howToFindOrChange4 = (await Menu.create([{
                name: "How to find or change your Facebook username",
                parentMenu: yourUsername3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var whatToDoIfTheUsername4 = (await Menu.create([{
                name: "What to do if the username you want isn't available on Facebook",
                parentMenu: yourUsername3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Account Settings > Legacy Contacts
            var chooseALegacyContact4 = (await Menu.create([{
                name: "Choose a legacy contact",
                parentMenu: legacyContacts3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var iAmALegacyContact4 = (await Menu.create([{
                name: "I am a legacy contact",
                parentMenu: legacyContacts3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var troubleshooting4 = (await Menu.create([{
                name: "Troubleshooting",
                parentMenu: legacyContacts3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            // Managing Your Account > Notifications > Push, Email, and Text Notifications
            var pushNotifications4 = (await Menu.create([{
                name: "Push Notifications",
                parentMenu: pushEmailAndText3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var emailNotifications4 = (await Menu.create([{
                name: "Email Notifications",
                parentMenu: pushEmailAndText3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var textNotifications4 = (await Menu.create([{
                name: "Text Notifications",
                parentMenu: pushEmailAndText3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            // Managing Your Account > Notifications > Choose What You're Notified About
            var whatTypesOfNotifications4 = (await Menu.create([{
                name: "What types of notifications does Facebook send?",
                parentMenu: chooseWhatYoureNotified3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var chooseWhatYouGetNotifications4 = (await Menu.create([{
                name: "Choose what you get notifications for on Facebook",
                parentMenu: chooseWhatYoureNotified3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var changeYourFacebookPage4 = (await Menu.create([{
                name: "Change your Facebook Page notification settings",
                parentMenu: chooseWhatYoureNotified3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var turnNotificationsOnOrOff4 = (await Menu.create([{
                name: "Turn notifications on or off for a Facebook group",
                parentMenu: chooseWhatYoureNotified3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Notifications > Fix a Problem
            var imGettingPushNotifications4 = (await Menu.create([{
                name: "I'm getting push notifications on Facebook even though I've set them to \"off.\"",
                parentMenu: fixAProblem3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var imNotReceivingEmail4 = (await Menu.create([{
                name: "I'm not receiving email notifications about my Facebook account.",
                parentMenu: fixAProblem3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var imReceivingEmailOrText4 = (await Menu.create([{
                name: "I'm receiving email or text notifications about a Facebook account that doesn't belong to me.",
                parentMenu: fixAProblem3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var iDidntReceiveAConfirmation4 = (await Menu.create([{
                name: "I didn't receive a confirmation code to finish setting up Facebook texts.",
                parentMenu: fixAProblem3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Ad Preferences > How Ads Work on Facebook
            var adsAndHowTheyreManaged4 = (await Menu.create([{
                name: "Ads and how they're managed in the EU",
                parentMenu: howAdsWork3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var makingAdsBetter4 = (await Menu.create([{
                name: "Making ads better and giving you more control on Facebook",
                parentMenu: howAdsWork3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var howDoesFacebookDecide4 = (await Menu.create([{
                name: "How does Facebook decide which ads to show me?",
                parentMenu: howAdsWork3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var doesFacebookReceiveCookie4 = (await Menu.create([{
                name: "Does Facebook receive cookie information when I visit a site with the Like button?",
                parentMenu: howAdsWork3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Ad Preferences > Control the Ads You See
            var yourAdPreferences4 = (await Menu.create([{
                name: "Your Ad preferences and how you can adjust them on Facebook",
                parentMenu: controlTheAds3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var adjustHowAdsOnFB4 = (await Menu.create([{
                name: "Adjust how ads on Facebook are shown to you based on your Activity Information from ad partners",
                parentMenu: controlTheAds3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var canIBlockOrHideAds4 = (await Menu.create([{
                name: "Can I block or hide ads showing on my Facebook account?",
                parentMenu: controlTheAds3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howCanIGiveFeedback4 = (await Menu.create([{
                name: "How can I give feedback about the ads I see on Facebook?",
                parentMenu: controlTheAds3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Ad Preferences > Your Info and Facebook Ads
            var doAdvertisersHaveAccess4 = (await Menu.create([{
                name: "Do advertisers have access to my personal information on Facebook?",
                parentMenu: yourInfoAndFacebook3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var whyDoesMyNameOrProfile4 = (await Menu.create([{
                name: "Why does my name or profile photo show in some ads to my friends on Facebook?",
                parentMenu: yourInfoAndFacebook3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var whyDidISeeMyFriends4 = (await Menu.create([{
                name: "Why did I see my friend's name or photo paired with an ad on Facebook?",
                parentMenu: yourInfoAndFacebook3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Control who can see what you share on Facebook
            var privacySettings4 = (await Menu.create([{
                name: "Privacy Settings and Privacy Checkup",
                parentMenu: controlWhoCanSee3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var whoCanSeeWhat4 = (await Menu.create([{
                name: "Who Can See What You Post",
                parentMenu: controlWhoCanSee3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var yourProfileInfo4 = (await Menu.create([{
                name: "Your Profile Info",
                parentMenu: controlWhoCanSee3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var yourTimeline4 = (await Menu.create([{
                name: "Your Timeline",
                parentMenu: controlWhoCanSee3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Manage What You've Shared
            var usingActivityLog4 = (await Menu.create([{
                name: "Using Activity Log",
                parentMenu: manageWhatYouveShared3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var managingYourContent4 = (await Menu.create([{
                name: "Managing Your Content",
                parentMenu: manageWhatYouveShared3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Control Who Can Find You
            var whoCanSearchForMe4 = (await Menu.create([{
                name: "Who can search for me on Facebook?",
                parentMenu: controlWhoCanFindYou3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var canOtherPeopleSearchFor4 = (await Menu.create([{
                name: "Can other people search for and view things that I post or share on Facebook?",
                parentMenu: controlWhoCanFindYou3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var howDoISeeWhatOthers4 = (await Menu.create([{
                name: "How do I see what others can search about me on Facebook?",
                parentMenu: controlWhoCanFindYou3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var controlWhoFacebookCan4 = (await Menu.create([{
                name: "Control who Facebook can suggest your profile to based on your email address or phone number",
                parentMenu: controlWhoCanFindYou3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Staying Safe > Abuse Resources
            var safetyResourcesAndWays4 = (await Menu.create([{
                name: "Safety resources & ways to stay safe on Facebook",
                parentMenu: abuseResources3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var howToHandleBullying4_2 = (await Menu.create([{
                name: "How to handle bullying, harassment, or personal attack on Facebook",
                parentMenu: abuseResources3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var howToHandleDares4 = (await Menu.create([{
                name: "How to handle dares or challenges on Facebook",
                parentMenu: abuseResources3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howToHandleThreats4 = (await Menu.create([{
                name: "How to handle threats to share nude or sexual images of you on Instagram",
                parentMenu: abuseResources3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Staying Safe > Suicide and Self-Injury Resources
            var helpAndSupport4 = (await Menu.create([{
                name: "Help and support for suicidal or self-injurious thoughts",
                parentMenu: suicideAndSelfInjury3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var findASuicideHelpline4 = (await Menu.create([{
                name: "Find a suicide helpline",
                parentMenu: suicideAndSelfInjury3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var ifYouSeePostsAboutSuicide4 = (await Menu.create([{
                name: "If you see posts about suicide or self-injury on Facebook",
                parentMenu: suicideAndSelfInjury3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var ifYouSeeAPostOnFacebook4 = (await Menu.create([{
                name: "If you see a post on Facebook that suggests someone has an eating disorder",
                parentMenu: suicideAndSelfInjury3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Staying Safe > Crisis Response
            var crisisResponse4 = (await Menu.create([{
                name: "Crisis Response",
                parentMenu: crisisResponse3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            // Privacy, Safety, and Security > Staying Safe > Safety Resources for Parents
            var safetyResourcesForParents4 = (await Menu.create([{
                name: "Safety Resources for Parents",
                parentMenu: safetyResourcesForParents3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var supervisionOnFacebook4 = (await Menu.create([{
                name: "Supervision on Facebook",
                parentMenu: safetyResourcesForParents3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            // Privacy, Safety, and Security > Keeping Your Account Secure > Security Features and Tips
            var keepYourAccount4 = (await Menu.create([{
                name: "Keep Your Account Secure",
                parentMenu: securityFeatures3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            // Privacy, Safety, and Security > Keeping Your Account Secure > Login Alerts and Two-Factor Authentication
            var managingYourAlerts4 = (await Menu.create([{
                name: "Managing Your Alerts and Authentication Methods",
                parentMenu: loginAlertsAnd3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var fixAProblemWith4 = (await Menu.create([{
                name: "Fix a Problem With Two-Factor Authentication",
                parentMenu: loginAlertsAnd3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            // Privacy, Safety, and Security > Keeping Your Account Secure > Avoid Spam and Scams
            var managingSpam4 = (await Menu.create([{
                name: "Managing spam on Facebook",
                parentMenu: avoidSpamAndScams3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var avoidingScams4 = (await Menu.create([{
                name: "Avoiding scams on Facebook",
                parentMenu: avoidSpamAndScams3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var myFriendsAccount4 = (await Menu.create([{
                name: "My friend's account is sending spam",
                parentMenu: avoidSpamAndScams3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howFacebookProtects4 = (await Menu.create([{
                name: "How Facebook protects you from spam",
                parentMenu: avoidSpamAndScams3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Shopping Safety > Recognizing Scams
            var whatIsAScam4 = (await Menu.create([{
                name: "What is a scam on Facebook Marketplace?",
                parentMenu: recognizingScams3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var aPhishingScamIs4 = (await Menu.create([{
                name: "A phishing scam is",
                parentMenu: recognizingScams3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var aBuyerScamIs4 = (await Menu.create([{
                name: "A buyer scam is",
                parentMenu: recognizingScams3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var aSellerScamIs4 = (await Menu.create([{
                name: "A seller scam is",
                parentMenu: recognizingScams3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Shopping Safety > Avoiding Scams
            var whenTalkingToBuyers4 = (await Menu.create([{
                name: "When talking to buyers and sellers, you should avoid",
                parentMenu: avoidingScams3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var whenDealingWithPayments4 = (await Menu.create([{
                name: "When dealing with payments, you should",
                parentMenu: avoidingScams3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var phishingAttempts4 = (await Menu.create([{
                name: "Phishing Attempts",
                parentMenu: avoidingScams3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            // Privacy, Safety, and Security > Shopping Safety > Buying on Marketplace
            var whenBuyingOn4 = (await Menu.create([{
                name: "When Buying on Facebook Marketplace",
                parentMenu: buyingOnMarketplace3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            // Privacy, Safety, and Security > Shopping Safety > Tips for Shopping Safely
            var tipsForBuyingSafely4 = (await Menu.create([{
                name: "Tips for Buying Safely on Facebook",
                parentMenu: tipsForShoppingSafely3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var beAwareOfScams4 = (await Menu.create([{
                name: "Be Aware of Scams",
                parentMenu: tipsForShoppingSafely3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var verifySellers4 = (await Menu.create([{
                name: "Verify Sellers on Facebook Marketplace",
                parentMenu: tipsForShoppingSafely3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var reportAConcern4 = (await Menu.create([{
                name: "Report a Concern",
                parentMenu: tipsForShoppingSafely3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Policies and Reporting > Reporting Abuse > Report Content on Facebook
            var reportContent4 = (await Menu.create([{
                name: "Report Content",
                parentMenu: reportContentOnFacebook3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            // Policies and Reporting > Reporting Abuse > Don't Have an Account?
            var howDoIReportSomething4 = (await Menu.create([{
                name: "How do I report something on Facebook if I don't have an account or can't see it?",
                parentMenu: dontHaveAnAccount3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var howToReportAFacebookAccount4 = (await Menu.create([{
                name: "How to report a Facebook account or Page that's pretending to be me or someone else",
                parentMenu: dontHaveAnAccount3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            // Policies and Reporting > Being Your Authentic Self on Facebook > Verifying your identity
            var whyFacebookMayAskYouTo4 = (await Menu.create([{
                name: "Why Facebook may ask you to upload an ID",
                parentMenu: verifyingYourIdentity3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var howToUploadAnIDToFB4 = (await Menu.create([{
                name: "How to upload an ID to Facebook",
                parentMenu: verifyingYourIdentity3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var typesOfIDsThatFacebook4 = (await Menu.create([{
                name: "What happens to your ID after you send it to Facebook",
                parentMenu: verifyingYourIdentity3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howDoIReviewSettings4 = (await Menu.create([{
                name: "How do I review settings related to my ID being stored on Facebook?",
                parentMenu: verifyingYourIdentity3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Policies and Reporting > Being Your Authentic Self on Facebook > Updating your profile information
            var whatNamesAreAllowed4 = (await Menu.create([{
                name: "What names are allowed on Facebook?",
                parentMenu: updatingYourProfileInfo3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var howToChangeYourName4 = (await Menu.create([{
                name: "How to change your name on Facebook",
                parentMenu: updatingYourProfileInfo3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var rejectedName4 = (await Menu.create([{
                name: "Rejected name when creating a Facebook account",
                parentMenu: updatingYourProfileInfo3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howYouCanAddAnotherName4 = (await Menu.create([{
                name: "How you can add another name (example: nickname, maiden name) to your Facebook account",
                parentMenu: updatingYourProfileInfo3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            var editALanguageSpecificName4 = (await Menu.create([{
                name: "Edit a language-specific name on Facebook",
                parentMenu: updatingYourProfileInfo3,
                nestLevel: 4,
                order: 5,
            }], { session }))[0];

            var whatYouCanDoIfYouHaveOneName4 = (await Menu.create([{
                name: "What you can do if you have one name instead of a first and last name",
                parentMenu: updatingYourProfileInfo3,
                nestLevel: 4,
                order: 6,
            }], { session }))[0];

            var whichNameToUse4 = (await Menu.create([{
                name: "Which name to use on Facebook when you're in the process of changing your name",
                parentMenu: updatingYourProfileInfo3,
                nestLevel: 4,
                order: 7,
            }], { session }))[0];

            var addYourNamePronunciation4 = (await Menu.create([{
                name: "Add your name pronunciation to your Facebook profile",
                parentMenu: updatingYourProfileInfo3,
                nestLevel: 4,
                order: 8,
            }], { session }))[0];

            // Policies and Reporting > Being Your Authentic Self on Facebook > Staying safe on Facebook
            var howToBlockSomeonesProfile4 = (await Menu.create([{
                name: "How to block someone's profile on Facebook",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var safetyResourcesAndWays4 = (await Menu.create([{
                name: "Safety resources & ways to stay safe on Facebook",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var howToHandleBullyingHarassment4 = (await Menu.create([{
                name: "How to handle bullying, harassment, or personal attack on Facebook",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howToHandleDaresOrChallenges4 = (await Menu.create([{
                name: "How to handle dares or challenges on Facebook",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            var howToHandleThreatsToShareNudeOr4 = (await Menu.create([{
                name: "How to handle threats to share nude or sexual images of you on Instagram",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 5,
            }], { session }))[0];

            var waysToHandleARelationship4 = (await Menu.create([{
                name: "Ways to handle a relationship that makes you uncomfortable on Instagram",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 6,
            }], { session }))[0];

            var ifYourCurrentOrPrevious4 = (await Menu.create([{
                name: "If your current or previous partner is controlling or monitoring your Facebook activity",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 7,
            }], { session }))[0];

            var whatShouldIDoIfISeeImages4 = (await Menu.create([{
                name: "What should I do if I see images on Facebook of a child being physically abused or sexually exploited?",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 8,
            }], { session }))[0];

            var whatShouldIDoIfSomeonePosts4 = (await Menu.create([{
                name: "What should I do if someone posts something on Facebook related to human trafficking?",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 9,
            }], { session }))[0];

            var learnMoreAboutTheMeta4 = (await Menu.create([{
                name: "Learn more about the Meta Safety Advisory Council",
                parentMenu: stayingSafeOnFacebook3,
                nestLevel: 4,
                order: 10,
            }], { session }))[0];

            // Policies and Reporting > Hacked and Fake Accounts > Hacked Accounts
            var recoverYourAccountIfYouThink4 = (await Menu.create([{
                name: "Recover Your Account if You Think Your Facebook Account Was Hacked or if Someone Is Using It Without Your Permission",
                parentMenu: hackedAccounts3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var helpYourFriendRecover4 = (await Menu.create([{
                name: "Help your friend recover their hacked Facebook account",
                parentMenu: hackedAccounts3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            // Policies and Reporting > Hacked and Fake Accounts > Impersonation Accounts
            var howDoIReportAnAccount4 = (await Menu.create([{
                name: "How do I report an account for impersonation?",
                parentMenu: impersonationAccounts3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            var howToReportAFacebookAccountOrPage4 = (await Menu.create([{
                name: "How to report a Facebook account or Page that's pretending to be me or someone else",
                parentMenu: impersonationAccounts3,
                nestLevel: 4,
                order: 2,
            }], { session }))[0];

            var howToRequestInformation4 = (await Menu.create([{
                name: "How to request information about an account that was impersonating you on Facebook",
                parentMenu: impersonationAccounts3,
                nestLevel: 4,
                order: 3,
            }], { session }))[0];

            var howToKnowIfAPublicFigure4 = (await Menu.create([{
                name: "How to know if a public figure or brand on Facebook is authentic",
                parentMenu: impersonationAccounts3,
                nestLevel: 4,
                order: 4,
            }], { session }))[0];

            // Policies and Reporting > Hacked and Fake Accounts > Fake Accounts
            var reportFakeFacebookProfiles4 = (await Menu.create([{
                name: "Report fake Facebook profiles",
                parentMenu: fakeAccounts3,
                nestLevel: 4,
                order: 1,
            }], { session }))[0];

            // Using Facebook > Your Profile > Add and Edit Your Profile Info > Basic Profile Information
            var changeName5 = (await Menu.create([{
                name: "Change name",
                parentMenu: basicProfileInfo4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var addOrEditIntro5 = (await Menu.create([{
                name: "Add or edit intro section",
                parentMenu: basicProfileInfo4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var editInformationOnFBProfile5 = (await Menu.create([{
                name: "Edit information on your Facebook profile and choose who can see it",
                parentMenu: basicProfileInfo4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var updatePhotosAndStories5 = (await Menu.create([{
                name: "Update photos and stories in the Featured section of your Facebook profile",
                parentMenu: basicProfileInfo4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Your Profile > Add and Edit Your Profile Info > About section of your profile
            var updateTheAboutSection5 = (await Menu.create([{
                name: "Update the About section of your Facebook Profile",
                parentMenu: aboutSectionProfile4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var changeYourRelationship5 = (await Menu.create([{
                name: "Change your relationship status on your Facebook profile",
                parentMenu: aboutSectionProfile4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var changeYourBirthday5 = (await Menu.create([{
                name: "Change your birthday on Facebook and choose who can see it",
                parentMenu: aboutSectionProfile4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var addYourNamePronunciation5 = (await Menu.create([{
                name: "Add your name pronunciation to your Facebook Profile",
                parentMenu: aboutSectionProfile4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Your Profile > Add and Edit Your Profile Info > Professional mode
            var whenToCreateAPage5_1 = (await Menu.create([{
                name: "When to create a Page or turn on professional mode for your profile",
                parentMenu: professionalMode4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var turnProfessionalMode5 = (await Menu.create([{
                name: "Turn professional mode on or off for your Facebook profile",
                parentMenu: professionalMode4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var profileTransparency5 = (await Menu.create([{
                name: "Profile Transparency section on Professional Mode",
                parentMenu: professionalMode4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Using Facebook > Messaging > Send Messages > Send Messages
            var editAMessageOnFB5 = (await Menu.create([{
                name: "Edit a message on Facebook",
                parentMenu: sendMessages4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var removeAMessage5 = (await Menu.create([{
                name: "Remove a message you've sent on Facebook",
                parentMenu: sendMessages4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var whoCanISendMessages5 = (await Menu.create([{
                name: "Who can I send messages to on Facebook",
                parentMenu: sendMessages4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var howMessageOnFBWork5 = (await Menu.create([{
                name: "How messages on Facebook work",
                parentMenu: sendMessages4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Messaging > Send Messages > Deleting
            var howDoIdeleteSticker5 = (await Menu.create([{
                name: "How do I delete sticker packs for my Facebook messages?",
                parentMenu: deleting4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var canIRetrieveDeleted5_1 = (await Menu.create([{
                name: "Can I retrieve deleted messages on Facebook?",
                parentMenu: deleting4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Messaging > Send Messages > Group Conversations
            var howManyPeopleCanIMessage5 = (await Menu.create([{
                name: "How many people can I message at once on Facebook?",
                parentMenu: groupConversations4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var howDoIChatWithMore5 = (await Menu.create([{
                name: "How do I chat with more than one friend at once on Facebook?",
                parentMenu: groupConversations4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var leaveAGroupChatOnFB5 = (await Menu.create([{
                name: "Leave a group chat on Facebook",
                parentMenu: groupConversations4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Using Facebook > Messaging > Send Messages > Messaging Pages, Events, and Groups
            var sendAMessageToYourFB5 = (await Menu.create([{
                name: "Send a message to your Facebook event guest list",
                parentMenu: messagingPagesEvents4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var sendAPrivateMessage5 = (await Menu.create([{
                name: "Send a private message to a Facebook Page",
                parentMenu: messagingPagesEvents4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Messaging > View and Manage Messages > View Messages
            var messagesYoullGet5 = (await Menu.create([{
                name: "Messages you'll get on Facebook",
                parentMenu: viewMessages4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whatAreMessageRequests5 = (await Menu.create([{
                name: "What are message requests?",
                parentMenu: viewMessages4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var checkYourMessageRequests5 = (await Menu.create([{
                name: "Check your message requests on Facebook",
                parentMenu: viewMessages4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Using Facebook > Messaging > View and Manage Messages > Delete and Archive Messages
            var deleteAChatOnFB5 = (await Menu.create([{
                name: "Delete a chat on Facebook",
                parentMenu: deleteAndArchive4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var canIRetrieveDeleted5_2 = (await Menu.create([{
                name: "Can I retrieve deleted messages on Facebook?",
                parentMenu: deleteAndArchive4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var hideOrArchiveAChat5 = (await Menu.create([{
                name: "Hide or archive a chat on Facebook",
                parentMenu: deleteAndArchive4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var searchForAChat5 = (await Menu.create([{
                name: "Search for a chat or message on Facebook",
                parentMenu: deleteAndArchive4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Messaging > Video Calling > Calling
            var callPeopleOnFB5 = (await Menu.create([{
                name: "Call people on Facebook",
                parentMenu: calling4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var troubleshootProblems5 = (await Menu.create([{
                name: "Troubleshoot problems with your camera, microphone, or speakers for video calling on Facebook",
                parentMenu: calling4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var whatToDoIfYourConnection5 = (await Menu.create([{
                name: "What to do if your connection is too slow for Facebook calls",
                parentMenu: calling4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var browsersThatSupport5 = (await Menu.create([{
                name: "Browsers that support video calling on Facebook",
                parentMenu: calling4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Messaging > Video Calling > Rooms
            var createAVideoCall5 = (await Menu.create([{
                name: "Create a video call from your Facebook feed",
                parentMenu: rooms4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var stopSharingYourRoom5 = (await Menu.create([{
                name: "Stop sharing your room on Facebook",
                parentMenu: rooms4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var editYourSettingsForACall5 = (await Menu.create([{
                name: "Edit your settings for a call you're sharing on Facebook",
                parentMenu: rooms4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var createALinkForAVideo5 = (await Menu.create([{
                name: "Create a link for a video or audio call on Facebook",
                parentMenu: rooms4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Create and Manage a Page > Create a Facebook Page
            var differencesBetweenProfiles5 = (await Menu.create([{
                name: "Differences between Profiles, Pages, and Groups on Facebook",
                parentMenu: createAFacebookPage4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var createAFBPage5 = (await Menu.create([{
                name: "Create a Facebook Page",
                parentMenu: createAFacebookPage4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var whenToCreateAPage5_2 = (await Menu.create([{
                name: "When to create a Page or turn on professional mode for your profile",
                parentMenu: createAFacebookPage4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var canIManageAFBPage5 = (await Menu.create([{
                name: "Can I manage a Facebook Page named for a city, country, or other geographic location?",
                parentMenu: createAFacebookPage4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Create and Manage a Page > Merge Facebook Pages
            var merge2FBPages5 = (await Menu.create([{
                name: "Merge 2 Facebook Pages",
                parentMenu: mergeFacebookPages4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            // Using Facebook > Pages > Create and Manage a Page > Invite friends
            var inviteFriendsToLike5 = (await Menu.create([{
                name: "Invite friends to like or follow a Page or profile on Facebook",
                parentMenu: inviteFriends4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            // Using Facebook > Pages > Create and Manage a Page > Delete or deactivate your Page
            var deleteOrCancelDeletion5 = (await Menu.create([{
                name: "Delete or cancel deletion of your Facebook Page",
                parentMenu: deleteOrDeactivate4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var deactiveYourFBPage5 = (await Menu.create([{
                name: "Deactive your Facebook Page",
                parentMenu: deleteOrDeactivate4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Pages > Manage Page Settings > Page Roles
            var learnAboutFacebookPage5 = (await Menu.create([{
                name: "Learn about Facebook Page access and roles",
                parentMenu: pageRoles4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var giveEditOrRemoveFBPage5 = (await Menu.create([{
                name: "Give, edit, or remove Facebook Page access",
                parentMenu: pageRoles4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var seeyourFBPageRole5 = (await Menu.create([{
                name: "See your Facebook Page role or access",
                parentMenu: pageRoles4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var changeYourFBPageNotif5 = (await Menu.create([{
                name: "Change your Facebook Page notification settings",
                parentMenu: pageRoles4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Manage Page Settings > Privacy and Visibility Settings
            var controlWhoCanSee5 = (await Menu.create([{
                name: "Control who can see your Facebook Page",
                parentMenu: privacyAndVisibility4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var addOrEditCountryAndAge5 = (await Menu.create([{
                name: "Add or edit country and age restrictions for your Page",
                parentMenu: privacyAndVisibility4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var turnSimilarPage5 = (await Menu.create([{
                name: "Turn similar Page suggestions on or off for your Page",
                parentMenu: privacyAndVisibility4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var seeWhatYourPage5 = (await Menu.create([{
                name: "See what your Page looks like to visitors",
                parentMenu: privacyAndVisibility4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Manage Page Settings > Connect a Page
            var addOrRemoveAnIGAccount5 = (await Menu.create([{
                name: "Add or remove an Instagram account from your Page",
                parentMenu: connectAPage4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whatHappensAfterConnecting5 = (await Menu.create([{
                name: "What happens after connecting your Facebook Page and Instagram account",
                parentMenu: connectAPage4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var connectYourFBPage5 = (await Menu.create([{
                name: "Connect your Facebook Page and WhatsApp account",
                parentMenu: connectAPage4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Using Facebook > Pages > Customize a Page > Profile Pictures and Cover Photos
            var addOrChangeYourFBPagesPFP5 = (await Menu.create([{
                name: "Add or change your Facebook Page's profile picture",
                parentMenu: profilePicturesAndCover4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var addOrChangeYourFBPagesCP5 = (await Menu.create([{
                name: "Add or change your Facebook Page's cover photo",
                parentMenu: profilePicturesAndCover4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Pages > Customize a Page > Categories and Templates
            var whatFeaturesAreAvailable5 = (await Menu.create([{
                name: "What features are available based on your Facebook Page's category",
                parentMenu: categoriesAndTemplates4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var editYourPagesCategory5 = (await Menu.create([{
                name: "Edit your Page's category on Facebook",
                parentMenu: categoriesAndTemplates4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Pages > Customize a Page > Edit Page Details
            var addBasicInfo5 = (await Menu.create([{
                name: "Add basic information to your Page",
                parentMenu: editPageDetails4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var addOrEditAnAddress5 = (await Menu.create([{
                name: "Add or edit an address on your Facebook Page",
                parentMenu: editPageDetails4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var addOrChangeBusinessHours5 = (await Menu.create([{
                name: "Add or change business hours on your Facebook Page",
                parentMenu: editPageDetails4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var addServicesToYourFBPage5 = (await Menu.create([{
                name: "Add services to your Facebook Page",
                parentMenu: editPageDetails4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Customize a Page > Call-to-Action Buttons
            var addAnActionButton5 = (await Menu.create([{
                name: "Add an action button to your Facebook Page",
                parentMenu: callToActionBtns4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var editOrDeleteYourPages5 = (await Menu.create([{
                name: "Edit or delete your Page's action button",
                parentMenu: callToActionBtns4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Pages > Publishing > Basics
            var likeOrCommentOnAnother5 = (await Menu.create([{
                name: "Like or comment on another Page's post as your Page",
                parentMenu: basics4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var sharePhotosOrVideos5 = (await Menu.create([{
                name: "Share photos or videos from your Facebook Page",
                parentMenu: basics4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var shareALinkFrom5 = (await Menu.create([{
                name: "Share a link from your Facebook Page",
                parentMenu: basics4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var pinItemsToTheTop5 = (await Menu.create([{
                name: "Pin items to the top of your Facebook Page",
                parentMenu: basics4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Publishing > Visibility & Editing
            var controlWhoCanSeeYourPagesPost5 = (await Menu.create([{
                name: "Control who can see your Page's posts on Facebook",
                parentMenu: visibilityAndEditing4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var removeOrHidePosts5 = (await Menu.create([{
                name: "Remove or hide posts from your Facebook page",
                parentMenu: visibilityAndEditing4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var editYourPagePost5 = (await Menu.create([{
                name: "Edit your Page post or see its edit history",
                parentMenu: visibilityAndEditing4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var howDoIChooseADate5 = (await Menu.create([{
                name: "How do I choose a date for my Facebook Page post to stop showing in News Feed?",
                parentMenu: visibilityAndEditing4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Pages > Publishing > Drafts & Scheduled Posts
            var createEditOrPublish5 = (await Menu.create([{
                name: "Create, edit, or publish a post draft for your Page",
                parentMenu: draftsAndScheduledPosts4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var scheduleAPostAndManage5 = (await Menu.create([{
                name: "Schedule a post and manage scheduled posts for your Facebook Page",
                parentMenu: draftsAndScheduledPosts4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var changeTheDateOfYourFBPage5 = (await Menu.create([{
                name: "Change the date of your Facebook Page's posts",
                parentMenu: draftsAndScheduledPosts4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Using Facebook > Pages > Publishing > Events
            var createAnEvent5 = (await Menu.create([{
                name: "Create an event for your Facebook Page",
                parentMenu: events4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var addOrRemoveAnotherPersons5 = (await Menu.create([{
                name: "Add or remove another person's or Page's Facebook event from your Page",
                parentMenu: events4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Using Facebook > Groups > Post, Participate, and Privacy > Post
            var postInAFBGroup5 = (await Menu.create([{
                name: "Post in a Facebook group",
                parentMenu: post4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var formatYourPost5 = (await Menu.create([{
                name: "Format your post in a Facebook group",
                parentMenu: post4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var postAnonymously5 = (await Menu.create([{
                name: "Post anonymously in a Facebook group",
                parentMenu: post4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var createAReel5 = (await Menu.create([{
                name: "Create a reel in a Facebook group",
                parentMenu: post4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Post, Participate, and Privacy > Participate
            var commentOnSomething5 = (await Menu.create([{
                name: "Comment on something you see on Facebook",
                parentMenu: participate4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var joinACommunityChat5 = (await Menu.create([{
                name: "Join a community chat in a Facebook group",
                parentMenu: participate4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var earnATopContributor5 = (await Menu.create([{
                name: "Earn a top contributor badge in a Facebook group",
                parentMenu: participate4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var awardAPostOrComment5 = (await Menu.create([{
                name: "Award a post or comment in a Facebook group",
                parentMenu: participate4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Post, Participate, and Privacy > Privacy
            var differencesBetweenPublic5_1 = (await Menu.create([{
                name: "Differences between public and private Facebook groups",
                parentMenu: privacy4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var changeAFacebookGroup5 = (await Menu.create([{
                name: "Change a Facebook group from public to private",
                parentMenu: privacy4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var hideOrUnhide5 = (await Menu.create([{
                name: "Hide or unhide a private Facebook group you admin",
                parentMenu: privacy4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var checkIfAFBGroup5 = (await Menu.create([{
                name: "Check if a Facebook group is public or private",
                parentMenu: privacy4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Post, Participate, and Privacy > Buy and Sell Groups
            var howBuyAndSellGroups5 = (await Menu.create([{
                name: "How buy and sell groups differ from regular Facebook groups",
                parentMenu: buyAndSellGroups4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var sellSomethinginAFB5 = (await Menu.create([{
                name: "Sell something in a Facebook buy and sell group",
                parentMenu: buyAndSellGroups4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var editYourListing5 = (await Menu.create([{
                name: "Edit your listing in a Facebook buy and sell group",
                parentMenu: buyAndSellGroups4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var markSomethingAsSold5 = (await Menu.create([{
                name: "Mark something as sold in a Facebook buy and sell group",
                parentMenu: buyAndSellGroups4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Create, Engage, and Manage Settings > Create
            var createAFBGroup5 = (await Menu.create([{
                name: "Create a Facebook group",
                parentMenu: create4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var differencesBetweenPublic5_2 = (await Menu.create([{
                name: "Differences between public and private Facebook groups",
                parentMenu: create4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var addAnAdmin5 = (await Menu.create([{
                name: "Add an admin or moderator to your Facebook group",
                parentMenu: create4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var changeTheColor5 = (await Menu.create([{
                name: "Change the color of a Facebook group you admin",
                parentMenu: create4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Create, Engage, and Manage Settings > Manage Group Settings
            var manageMembership5 = (await Menu.create([{
                name: "Manage membership for your Facebook group",
                parentMenu: manageGroupSettings4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var managePosts5 = (await Menu.create([{
                name: "Manage posts for your Facebook group",
                parentMenu: manageGroupSettings4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var addAndManageFeatures5_1 = (await Menu.create([{
                name: "Add and manage features for a Facebook group you admin",
                parentMenu: manageGroupSettings4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var sortPostsInAFBGroup = (await Menu.create([{
                name: "Sort posts in a Facebook group you admin",
                parentMenu: manageGroupSettings4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Create, Engage, and Manage Settings > Manage Group Features
            var addAndManageFeatures5_2 = (await Menu.create([{
                name: "Add and manage features for a Facebook group you admin",
                parentMenu: manageGroupFeatures4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var manageCommunityChats5 = (await Menu.create([{
                name: "Manage community chats in a Facebook group you admin",
                parentMenu: manageGroupFeatures4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var addOrRemoveTheFBBuy5 = (await Menu.create([{
                name: "Add or remove the Facebook buy and sell feature set in your Facebook group",
                parentMenu: manageGroupFeatures4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var addOrRemoveAnApp5 = (await Menu.create([{
                name: "Add or remove an app from a Facebook group you admin",
                parentMenu: manageGroupFeatures4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Create, Engage, and Manage Settings > Engage
            var welcomeNewMembers5 = (await Menu.create([{
                name: "Welcome new members to a Facebook group you manage",
                parentMenu: engage4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var scheduleAPostInAFBGroup5 = (await Menu.create([{
                name: "Schedule a post in a Facebook group you manage",
                parentMenu: engage4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var createACommunityChat5 = (await Menu.create([{
                name: "Create a community chat in a Facebook group",
                parentMenu: engage4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var attachACommunityChat5 = (await Menu.create([{
                name: "Attach a community chat to your Facebook group post",
                parentMenu: engage4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Manage People and Content > Manage People
            var setUpAdminAssist5 = (await Menu.create([{
                name: "Set up Admin Assist to automatically manage your Facebook group",
                parentMenu: managePeople4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var turnBadgesOnOrOff5 = (await Menu.create([{
                name: "Turn badges on or off in a Facebook group you manage",
                parentMenu: managePeople4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var seeTheMembersOfAFBGroup5 = (await Menu.create([{
                name: "See the members of a Facebook group",
                parentMenu: managePeople4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var whatItMeansThatAFBGroup5 = (await Menu.create([{
                name: "What it means that a Facebook group member is unavailable",
                parentMenu: managePeople4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Manage People and Content > Manage Content
            var chooseWhatPeople5 = (await Menu.create([{
                name: "Choose what people can post in a Facebook group you admin",
                parentMenu: manageContent4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var managePostsForYourFBGroup5 = (await Menu.create([{
                name: "Manage posts for your Facebook group",
                parentMenu: manageContent4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var sortPostsInAFBGroup5 = (await Menu.create([{
                name: "Sort posts in a Facebook group you admin",
                parentMenu: manageContent4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var whyAFBGroupPost5 = (await Menu.create([{
                name: "Why a Facebook group post is empty",
                parentMenu: manageContent4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Manage People and Content > Enforce and Moderate
            var removeBanOrUnban5 = (await Menu.create([{
                name: "Remove, ban, or unban someone in a Facebook group you manage",
                parentMenu: enforceAndModerate4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var suspendSomeone5 = (await Menu.create([{
                name: "Suspend someone in a Facebook group you manage",
                parentMenu: enforceAndModerate4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var removeAPostInAFBGroup5 = (await Menu.create([{
                name: "Remove a post in a Facebook group you manage",
                parentMenu: enforceAndModerate4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var turnOffPostComments5 = (await Menu.create([{
                name: "Turn off post comments or comment replies in a Facebook group",
                parentMenu: enforceAndModerate4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Manage People and Content > Admin and Moderator Team
            var differenceBetweenAdmin5 = (await Menu.create([{
                name: "Difference between admin and moderator of a Facebook group",
                parentMenu: adminAndModeratorTeam4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var addAnAdminOrModerator5 = (await Menu.create([{
                name: "Add an admin or moderator to your Facebook group",
                parentMenu: adminAndModeratorTeam4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var removeAnAdminOrModerator5 = (await Menu.create([{
                name: "Remove an admin or moderator from your Facebook group",
                parentMenu: adminAndModeratorTeam4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var chatWithOtherAdmins5 = (await Menu.create([{
                name: "Chat with other admins and moderators in your Facebook group",
                parentMenu: adminAndModeratorTeam4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Community Chats > Get started
            var findAFBGroups5 = (await Menu.create([{
                name: "Find a Facebook group's community chat",
                parentMenu: getStarted4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var createACommunityChat5_2 = (await Menu.create([{
                name: "Create a community chat in a Facebook group",
                parentMenu: getStarted4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var privacyAndSafety5 = (await Menu.create([{
                name: "Privacy and safety in community chats",
                parentMenu: getStarted4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var accessToCommunity5 = (await Menu.create([{
                name: "Access to community chats for Facebook groups",
                parentMenu: getStarted4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Community Chats > Use community chats
            var joinACommunityChat5_2 = (await Menu.create([{
                name: "Join a community chat in a Facebook group",
                parentMenu: useCommunityChats4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var addSomeoneToYourFacebooks5 = (await Menu.create([{
                name: "Add someone to your Facebook group's community chat",
                parentMenu: useCommunityChats4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var manageCommunityChatNotifs5 = (await Menu.create([{
                name: "Manage community chat notifications on Messenger",
                parentMenu: useCommunityChats4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var leaveACommunityChatOnMessenger5 = (await Menu.create([{
                name: "Leave a community chat on Messenger or Facebook",
                parentMenu: useCommunityChats4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Using Facebook > Groups > Community Chats > Manage community chats
            var addOrRemoveCommunityChat5 = (await Menu.create([{
                name: "Add or remove community chat admins and moderators",
                parentMenu: manageCommunityChats4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var deleteACommunityChat5 = (await Menu.create([{
                name: "Delete a community chat on Messenger or Facebook",
                parentMenu: manageCommunityChats4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var createCategories5 = (await Menu.create([{
                name: "Create categories for your community chats",
                parentMenu: manageCommunityChats4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var attachACommunityChat5_2 = (await Menu.create([{
                name: "Attach a community chat to your Facebook group posts",
                parentMenu: manageCommunityChats4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Login and Password > Fix a Login Problem > Login Help
            var recoverYourFBAccount5 = (await Menu.create([{
                name: "Recover your Facebook Account if You Can't Log In",
                parentMenu: loginHelp4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var troubleshootLogin5 = (await Menu.create([{
                name: "Troubleshoot login with a phone number on Facebook",
                parentMenu: loginHelp4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var findYourAccount5 = (await Menu.create([{
                name: 'Find your account from the "Find your account" page',
                parentMenu: loginHelp4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var iHaveToEnterASecurity5 = (await Menu.create([{
                name: "I have to enter a security code every time I log into Facebook",
                parentMenu: loginHelp4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Login and Password > Log Fix a Login Problem > Password Help
            var unableToResetPW5 = (await Menu.create([{
                name: "Unable to reset password because of password reset limit",
                parentMenu: passwordHelp4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var problemsWithResetting5 = (await Menu.create([{
                name: "Problems with resetting your Facebook password",
                parentMenu: passwordHelp4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var recoverYourAccountIf5 = (await Menu.create([{
                name: "Recover Your Account If You Can't Access the Email or Mobile Number on the Account",
                parentMenu: passwordHelp4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Managing Your Account > Account Settings > Connect to Facebook Without Data Charges > Using basic mode
            var optInToBasic5 = (await Menu.create([{
                name: "Opt in to basic mode on Facebook",
                parentMenu: usingBasicMode4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var unableToSeePhotos5 = (await Menu.create([{
                name: "Unable to see photos or videos when I'm connected to basic mode on Facebook",
                parentMenu: usingBasicMode4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var devicesYouCanUse5 = (await Menu.create([{
                name: "Devices you can use to connect to Facebook without data charges",
                parentMenu: usingBasicMode4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var optOutOfBasicMode5 = (await Menu.create([{
                name: "Opt out of basic mode on Facebook",
                parentMenu: usingBasicMode4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Account Settings > Legacy Contacts > Choose a legacy contact
            var addALegacyContact5 = (await Menu.create([{
                name: "Add a legacy contact to a memorialized Facebook profile",
                parentMenu: chooseALegacyContact4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whatHappensToYourFB5 = (await Menu.create([{
                name: "What happens to your Facebook profile if you pass away",
                parentMenu: chooseALegacyContact4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var addChangeOrRemove5 = (await Menu.create([{
                name: "Add, change, or remove your legacy contact on Facebook",
                parentMenu: chooseALegacyContact4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var onlyOneOfYourFB5 = (await Menu.create([{
                name: "Only one of your Facebook friends can act as your legacy contact",
                parentMenu: chooseALegacyContact4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Managing Your Account > Account Settings > Legacy Contacts > I am a legacy contact
            var manageAMemorialized5 = (await Menu.create([{
                name: "Manage a memorialized profile on Facebook",
                parentMenu: iAmALegacyContact4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var addAPinnedPost5 = (await Menu.create([{
                name: "Add a pinned post to a memorialized profile on Facebook",
                parentMenu: iAmALegacyContact4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var declineBeingALegacy5 = (await Menu.create([{
                name: "Decline being a legacy contact on Facebook",
                parentMenu: iAmALegacyContact4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Managing Your Account > Account Settings > Legacy Contacts > Troubleshooting
            var requestRemoval5 = (await Menu.create([{
                name: "Request removal of a deceased family member's Facebook account",
                parentMenu: troubleshooting4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var askAQuestionAboutA5 = (await Menu.create([{
                name: "Ask a question about a deceased person's account on Facebook",
                parentMenu: troubleshooting4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var reportingADeceasedPerson5 = (await Menu.create([{
                name: "Reporting a deceased person or a Facebook account that needs to be memorialized",
                parentMenu: troubleshooting4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Managing Your Account > Notifications > Push, Email, and Text Notifications > Push Notifications
            var howDoIAdjustMyMobile5 = (await Menu.create([{
                name: "How do I adjust my mobile push notifications from Facebook?",
                parentMenu: pushNotifications4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var howDoITurnOnFacebook5 = (await Menu.create([{
                name: "How do I turn on Facebook push notifications through Google Chrome or Firefox?",
                parentMenu: pushNotifications4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Managing Your Account > Notifications > Push, Email, and Text Notifications > Email Notifications
            var adjustYourEmailNotifications5 = (await Menu.create([{
                name: "Adjust your email notifications from Facebook",
                parentMenu: emailNotifications4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whyAmIReceivingEmail5 = (await Menu.create([{
                name: "Why am I receiving email notifications from Facebookmail.com and Metamail.com?",
                parentMenu: emailNotifications4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Managing Your Account > Notifications > Push, Email, and Text Notifications > Text Notifications
            var setUpFacebookTexts5 = (await Menu.create([{
                name: "Set up Facebook texts",
                parentMenu: textNotifications4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var updateFacebookUsing5 = (await Menu.create([{
                name: "Update Facebook using a text message (SMS)",
                parentMenu: textNotifications4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Control who can see what you share on Facebook > Privacy Settings and Privacy Checkup
            var adjustYourFacebook5 = (await Menu.create([{
                name: "Adjust your Facebook privacy settings",
                parentMenu: privacySettings4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var facebookPrivacy5 = (await Menu.create([{
                name: "Facebook Privacy Checkup",
                parentMenu: privacySettings4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var publicInformation5 = (await Menu.create([{
                name: "Public Information on Facebook",
                parentMenu: privacySettings4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Control who can see what you share on Facebook > Who Can See What You Post
            var chooseWhoCanSee5 = (await Menu.create([{
                name: "Choose who can see your post on Facebook",
                parentMenu: whoCanSeeWhat4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whoCanLikeOrComment5 = (await Menu.create([{
                name: "Who can like or comment on things that I post on Facebook?",
                parentMenu: whoCanSeeWhat4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var whoCanSeeYourPosts5 = (await Menu.create([{
                name: "Who can see your posts on Facebook?",
                parentMenu: whoCanSeeWhat4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var whoCanSeeMyPosts5 = (await Menu.create([{
                name: "Who can see my posts when I use hashtags?",
                parentMenu: whoCanSeeWhat4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Control who can see what you share on Facebook > Your Profile Info
            var controlWhoCanSeeWhats5 = (await Menu.create([{
                name: "Control who can see what's on your Facebook Profile",
                parentMenu: yourProfileInfo4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var editInformationOnYourFBProfile5 = (await Menu.create([{
                name: "Edit information on your Facebook profile and choose who can see it",
                parentMenu: yourProfileInfo4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var howToSeeThePublicView5 = (await Menu.create([{
                name: "How to see the public view of your Facebook profile",
                parentMenu: yourProfileInfo4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var howDoIControlWho5 = (await Menu.create([{
                name: "How do I control who can see my email on my Facebook profile?",
                parentMenu: yourProfileInfo4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Control who can see what you share on Facebook > Your Timeline
            var findYourFBActivityLog5 = (await Menu.create([{
                name: "Who views your Facebook profile",
                parentMenu: yourTimeline4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var canPeopleSeeMyPMs5 = (await Menu.create([{
                name: "Can people see my private messages on my Facebook timeline?",
                parentMenu: yourTimeline4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var chooseWhoCanSeeYourPreviousPosts5 = (await Menu.create([{
                name: "Choose who can see your previous posts on Facebook",
                parentMenu: yourTimeline4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var chooseWhoCanSeePostsOn5 = (await Menu.create([{
                name: "Control who can see posts on your Facebook timeline",
                parentMenu: yourTimeline4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Manage What You've Shared > Using Activity Log
            var findYourFacebookActivityLog5 = (await Menu.create([{
                name: "Find your Facebook activity log",
                parentMenu: usingActivityLog4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whatsIncludedInMy5 = (await Menu.create([{
                name: "What's included in my Facebook activity log?",
                parentMenu: usingActivityLog4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var howToUseActivityLog5 = (await Menu.create([{
                name: "How to use activity log on Facebook to find specific content",
                parentMenu: usingActivityLog4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var useActivityLogToView5 = (await Menu.create([{
                name: "Use Activity Log to view hidden information on Facebook",
                parentMenu: usingActivityLog4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Your Privacy > Manage What You've Shared > Managing Your Content
            var howToUseActivityLogOnFacebook5 = (await Menu.create([{
                name: "How to use activity log on Facebook to manage content",
                parentMenu: managingYourContent4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var howDoIManageActivity5 = (await Menu.create([{
                name: "How do I manage activity I've been tagged in on Facebook from one place?",
                parentMenu: managingYourContent4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var deleteASearchFromYour5 = (await Menu.create([{
                name: "Delete a search from your Facebook activity log",
                parentMenu: managingYourContent4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var useManageActivity5 = (await Menu.create([{
                name: "Use Manage Activity in your Activity Log to archive or delete content",
                parentMenu: managingYourContent4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Staying Safe > Crisis Response > Crisis Response
            var findCrisisResponse5 = (await Menu.create([{
                name: "Find Crisis Response on Facebook",
                parentMenu: crisisResponse4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var findASafetyCheck5 = (await Menu.create([{
                name: "Find a Safety Check on Facebook",
                parentMenu: crisisResponse4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var ifYourFriendsAreMarked5 = (await Menu.create([{
                name: "If your friends are marked safe through Safety Check on Facebook News Feed",
                parentMenu: crisisResponse4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var howSafetyCheckIs5 = (await Menu.create([{
                name: "How Safety Check is activated on Facebook",
                parentMenu: crisisResponse4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Staying Safe > Safety Resources for Parents > Safety Resources for Parents
            var minorSafety5 = (await Menu.create([{
                name: "Minor safety on Facebook",
                parentMenu: safetyResourcesForParents4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whatIsFamilyCenter5 = (await Menu.create([{
                name: "Ways to help your teen use Facebook wisely",
                parentMenu: safetyResourcesForParents4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var howDoLocationSettingsWork5 = (await Menu.create([{
                name: "How do location settings work for minors on Facebook?",
                parentMenu: safetyResourcesForParents4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var howToHandleThreatsToShare5 = (await Menu.create([{
                name: "How to handle threats to share private images or personal info on Facebook",
                parentMenu: safetyResourcesForParents4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Staying Safe > Safety Resources for Parents > Supervision on Facebook
            var whatIsSupervision5 = (await Menu.create([{
                name: "What is supervision on Facebook?",
                parentMenu: supervisionOnFacebook4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whatIsFamilyCenterOnFB5 = (await Menu.create([{
                name: "What is Family Center on Facebook?",
                parentMenu: supervisionOnFacebook4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var setUpSupervision5 = (await Menu.create([{
                name: "Set up supervision on Facebook",
                parentMenu: supervisionOnFacebook4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var removeSupervision5 = (await Menu.create([{
                name: "Remove supervision on Facebook",
                parentMenu: supervisionOnFacebook4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Keeping Your Account Secure > Security Features and Tips > Keep Your Account Secure
            var keepYourFacebook5 = (await Menu.create([{
                name: "Keep your Facebook account secure",
                parentMenu: keepYourAccount4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var usingSecurityCheckup5 = (await Menu.create([{
                name: "Using Security Checkup to add security to your Facebook account",
                parentMenu: keepYourAccount4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var doesFacebookUseSecure5 = (await Menu.create([{
                name: "Does Facebook use secure browsing (HTTPS)?",
                parentMenu: keepYourAccount4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var getAOneTimePassword5 = (await Menu.create([{
                name: "Get a one-time password to log into Facebook",
                parentMenu: keepYourAccount4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Keeping Your Account Secure > Login Alerts and Two-Factor Authentication > Managing Your Alerts and Authentication Methods
            var getAlertsAbout5 = (await Menu.create([{
                name: "Get alerts about unrecognized logins to Facebook",
                parentMenu: managingYourAlerts4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var howTwoFactorAuthentication5 = (await Menu.create([{
                name: "How two-factor authentication works on Facebook",
                parentMenu: managingYourAlerts4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var howDoIUseTextMessages5 = (await Menu.create([{
                name: "How do I use text messages (SMS) for two-factor authentication on Facebook?",
                parentMenu: managingYourAlerts4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var getSecurityCode5 = (await Menu.create([{
                name: "Get security code for two-factor authentication to log into Facebook",
                parentMenu: managingYourAlerts4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Keeping Your Account Secure > Login Alerts and Two-Factor Authentication > Fix a Problem With Two-Factor Authentication
            var loginAlertsShowingSame5 = (await Menu.create([{
                name: "Login alerts showing same device at every login",
                parentMenu: fixAProblemWith4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var logOutOfFacebook5 = (await Menu.create([{
                name: "Log out of Facebook on another computer, phone, or tablet",
                parentMenu: fixAProblemWith4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var reviewRecentFacebook5 = (await Menu.create([{
                name: "Review recent Facebook logins",
                parentMenu: fixAProblemWith4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var whenAndWhyToSave5 = (await Menu.create([{
                name: "When & why to save your device to your Facebook account",
                parentMenu: fixAProblemWith4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Shopping Safety > Tips for Shopping Safely > Tips for Buying Safely on Facebook
            var buyAndSellResponsibility5 = (await Menu.create([{
                name: "Buy and sell responsibly on Facebook Marketplace",
                parentMenu: tipsForBuyingSafely4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var buyingAndSelling5 = (await Menu.create([{
                name: "Buying and selling electronics on Facebook Marketplace",
                parentMenu: tipsForBuyingSafely4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var whatShouldIKnow5 = (await Menu.create([{
                name: "What should I know about buying on Facebook during COVID-19?",
                parentMenu: tipsForBuyingSafely4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var discriminationPolicies5 = (await Menu.create([{
                name: "Discrimination policies for listings on Facebook Marketplace",
                parentMenu: tipsForBuyingSafely4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Shopping Safety > Tips for Shopping Safely > Be Aware of Scams
            var recognizingScams5 = (await Menu.create([{
                name: "Recognizing Scams",
                parentMenu: beAwareOfScams4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var avoidingScams5 = (await Menu.create([{
                name: "Avoiding Scams",
                parentMenu: beAwareOfScams4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var buyingOnMarketplace5 = (await Menu.create([{
                name: "Buying on Marketplace",
                parentMenu: beAwareOfScams4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var thingsThatCantBeListed5 = (await Menu.create([{
                name: "Things that can't be listed for sale on Facebook Marketplace",
                parentMenu: beAwareOfScams4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            // Privacy, Safety, and Security > Shopping Safety > Tips for Shopping Safely > Verify Sellers on Facebook Marketplace
            var tipsForLearning5 = (await Menu.create([{
                name: "Tips for learning about a seller on Facebook Marketplace",
                parentMenu: verifySellers4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var howRatingsWork5 = (await Menu.create([{
                name: "How ratings work on Facebook Marketplace",
                parentMenu: verifySellers4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var getSellerBadges5 = (await Menu.create([{
                name: "Get seller badges on Facebook",
                parentMenu: verifySellers4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Privacy, Safety, and Security > Shopping Safety > Tips for Shopping Safely > Report a Concern
            var reportAFacebookMarketplace5 = (await Menu.create([{
                name: "Report a Facebook Marketplace seller",
                parentMenu: reportAConcern4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var whatToDoIfYouSeeAStolen5 = (await Menu.create([{
                name: "What to do if you see a stolen item on Facebook Marketplace",
                parentMenu: reportAConcern4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var blockSomeoneOnFacebookMarketplace5 = (await Menu.create([{
                name: "Block someone on Facebook Marketplace",
                parentMenu: reportAConcern4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            // Policies and Reporting > Reporting Abuse > Report Content on Facebook > Report Content
            var reportAProfile5 = (await Menu.create([{
                name: "Report a profile",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 1,
            }], { session }))[0];

            var posts5 = (await Menu.create([{
                name: "Posts",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 2,
            }], { session }))[0];

            var postsOnYourTimeline5 = (await Menu.create([{
                name: "Posts on Your Timeline",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 3,
            }], { session }))[0];

            var photosAndVideos5 = (await Menu.create([{
                name: "Photos and Videos",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 4,
            }], { session }))[0];

            var messages5 = (await Menu.create([{
                name: "Messages",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 5,
            }], { session }))[0];

            var pages5 = (await Menu.create([{
                name: "Pages",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 6,
            }], { session }))[0];

            var groups5 = (await Menu.create([{
                name: "Groups",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 7,
            }], { session }))[0];

            var events5 = (await Menu.create([{
                name: "Events",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 8,
            }], { session }))[0];

            var comments5 = (await Menu.create([{
                name: "Comments",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 9,
            }], { session }))[0];

            var adsOnFacebook5 = (await Menu.create([{
                name: "Ads on Facebook",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 10,
            }], { session }))[0];

            var hashtags5 = (await Menu.create([{
                name: "Hashtags",
                parentMenu: reportContent4,
                nestLevel: 5,
                order: 11,
            }], { session }))[0];
        } catch (err) {
            console.error(err);
        }

        const allMenus = await Menu.find({}, null, { session });
        for (const menu of allMenus) {
            const childMenu = await Menu.findOne({
                parentMenu: menu,
                nestLevel: menu.nestLevel + 1,
            }, null, { session });
            if (childMenu === null) {
                menu.isLeaf = true;
                await menu.save();
            }
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
