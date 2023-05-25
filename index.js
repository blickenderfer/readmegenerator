const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    type: "input",
    message: "List any collaborators who helped build this application.",
    name: "credits",
},
{
    type: "list",
    message: "Select which license applies to this application.",
    name: "license",
    choices: [
        "Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"
    ]
},
{
    type: "input",
    message: "List any features of this application.",
    name: "features",
},
{
    type: "input",
    message: "Provide resources on how someone can contribute to this project.",
    name: "contribute",
},
{
    type: "input",
    message: "List any testing this application went through.",
    name: "tests",
},
{
    type: "input",
    message: "Enter your Github username.",
    name: "github"
},
{
    type: "input",
    message: "Enter your email.",
    name: "email",
}
];


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile("README.md", generateMarkdown(answers))
            console.log("Your README has been succesfully generated!");
        })

}

init();
