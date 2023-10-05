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
    name: "Enter a table of contents to help locate different sections in your readme",
},
{
    type: "input"
}

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
