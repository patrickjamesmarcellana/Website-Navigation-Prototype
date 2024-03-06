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
            var whenToCreateAPage5 = await Menu.create({
                name: "When to create a Page or turn on professional mode for your profile",
                parentMenu: professionalMode4,
                nestLevel: 5,
                order: 1,
            });
            await whenToCreateAPage5.populate("parentMenu");

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

            var canIRetrieveDeleted5 = await Menu.create({
                name: "Can I retrieve deleted messages on Facebook?",
                parentMenu: deleting4,
                nestLevel: 5,
                order: 2,
            });
            await canIRetrieveDeleted5.populate("parentMenu");

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
