# Using Paths and Length of Stay as Metrics to Improve the Jump/Switch Hierarchy Pattern of a Side Navigation Bar

### Project Overview
As part of our **Computational Interaction Design (HCI2001)** course, our team conducted a study regarding the computational design of a side navigation bar's jump/switch hierarchy pattern. One current implementation of such a pattern is [Facebook's Help Center](https://www.facebook.com/help/). Despite the monumental strides made in designing effective websites, most navigation systems persist with difficulty locating the desired menus [1]. This study aims to look into this problem by assessing the performance of the current interface in three defined variables: **font size**, **number of subsections per menu**, and **size of space between each menu**. By looking into existing studies, this research aims to analyze the performance of users using two defined metrics: the **number of paths** (backtracking) made by the participants, **average time consumed by the user per page**, and the **overall total time spent**. After analyzing the current interface, this project would offer a redesigned pattern, following the three variables, with a corresponding analysis as well about the performance of users in the redesigned pattern.

### Navigation Task and the Testing Interface
This project serves as a testing interface for the study regarding vertical/side navigation bars that employ a jump/switch hierarchy pattern. As an overview of this interface, the website first asks for the participant's name and then looks up a prompt from the database. After each prompt, the user is faced with the Facebook Help Center navigation system wherein the user must locate the specified prompt. Upon successful navigation, a Done button should appear, which ends the trial. There are seven trials/prompts per test, and the results regarding the accumulated path count, average time spent per page, and total time in the navigation task are displayed to the participant. 

### Dependencies
1. `dotenv` - Used to load environment variables from a `.env` file
2. `express` - Minimalist web framework for Node.js
3. `express-handlebars` - A Handlebars view/templating engine used with Express
4. `hbs` - A template engine plugin, which allows rendering of `.hbs` files
5. `mongoose` - A MongoDB object modeling tool
6. `path` - Exact copy of the NodeJS 'path' module

### Installation and Setup
1. Clone the repository in your local machine.
2. Install the necessary dependencies using the command `npm i`.
3. Create a `.env` file containing your PORT number and MONGODB_URI.
4. Populate the database of menus using the command `npm run populate`.
5. Launch the application using the command `npm run start`.
6. View the application in your preferred browser.
