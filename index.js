const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const asyncWrite = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your full name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What packages will a user need to install to use your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Explain how a new user can use this project:",
        name: "usage"
    },
    {
        type: "list",
        message: "Which license does your project have?",
        name: "license",
        choices: ["MIT", "GNU GPLv3", "None"]
    },
    {
        type: "input",
        message: "Who contrubited to this project, including yourself?",
        name: "contributors"
    },
    {
        type: "input",
        message: "What command is used to test your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub e-mail?",
        name: "email"
    }
];

// function to write README file
async function writeToFile (data) {
    try {
        await asyncWrite("README.md", generateMarkdown.generateMarkdown(data));
        console.log("Your README.md was created successfully.");
    } catch(err) {
        console.log(err);
    }
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(answers);
    });
};

// function call to initialize program
init();