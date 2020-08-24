const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
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
        type: "list",
        message: "What contents should your README.md contain?",
        name: "content"
    },
    {
        type: "input",
        message: "What packages will a user need to install to use your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Explain how a new user can use this project:",
        nname: "usage"
    },
    {
        type: "list",
        message: "Which license does your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"]
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", err => {
        if (err) throw err;

        console.log("Your README.md was successfully created.");
    });
};

// function to initialize program
function init() {
    generateMarkdown(questions);
    writeToFile("README.md", generateMarkdown(questions));
};

// function call to initialize program
init();
