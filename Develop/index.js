// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of this application?",
    name: "title",
},
{
    type: "input",
    message: "Write a description of this application.",
    name: "description",
},
{
    type: "input",
    message: "What are the installation requirements for this application?",
    name: "installation",
},
{
    type: "input",
    message: "Describe the intended usage of this application.",
    name: "usage",
},
{
    type: "list",
    message: "License",
    name: "license",
    choices: [
        "Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"
    ]
},
{
    type: "input",
    message: "features",
    name: "features",
},
{
    type: "input",
    message: "how to contribute",
    name: "contribute",
},
{
    type: "input",
    message: "Tests",
    name: "tests",
},
{
    type: "input",
    message: "enter github",
    name: "github"
},
{
    type: "input",
    message: "enter email",
    name: "email",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile("README.md", generateMarkdown(answers))
            console.log("readmegenerated");
        })

}

// Function call to initialize app
init();
