// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// Created an array of questions for user input
const questions = [{
    type: "input",
    name: "username",
    message: "What is your project title?",
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
    name: "tableOfContents",
    message: "Enter a table of contents to help locate different sections in your readme",
},
{
    type: "input",
    name: "usage",
    message: "Show instructions for use",
},
{
    type: "input",
    name: "tests",
    message: "List any test and provide examples on how to run them.",
},
{
    type: "input",
    name: "license",
    message: "List any licenses' your project may include. Choices include ISC, MIT, Apache License 2.0, GNU GPLv2, GNU GPLv3",
},
]

// A function to write README files
function writeToFile(fileName, data) {
    var fileName = 'README.md';
    fs.writeFile(fileName, data, "utf-8", function(err) {
        if (err) throw err;
        console.log("Success");
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
