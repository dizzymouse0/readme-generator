// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// Created an array of questions for user input
const questions = [{
    type: "input",
    name: "username",
    message: "What is your GitHub user name?",
},
{
    type: "input",
    name: "title",
    message: "What is your project title?",
},
{
    type: "input",
    name: "description",
    message: "What is your project description?",
},
{
    type: "input",
    name: "installation",
    message: "What steps are required to install your project?",
},
{
    type: "input",
    name: "usage",
    message: "Show instructions for use",
},
{
    type: "input",
    name: "credits",
    message: "List collaborators and any tutorials used.",
},
{
    type: "input",
    name: "contribute",
    message: "Add your instructions if contributing to this project.",
},
{
    type: "input",
    name: "tests",
    message: "List any tests and how to run them.",
},
{
    type: "list",
    name: "license",
    message: "List any licenses' your project may include.",
    choices: ['mit', 'isc', 'gpl-3.0', 'apache-2.0'],
},

];

// A function to write README files
function writeToFile(fileName, data) {
    var fileName = 'README.md';
    fs.writeFile(fileName, data, "utf-8", function(err) {
        if (err) throw err;
        console.log("Success");
    });
}

// this section prints the data object to the terminal
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        let readme = generateMarkdown(data);
        var fileName = 'README.md';
        return writeToFile(fileName, readme);
    });
}

// Function call to initialize app
init();
