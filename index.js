// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the application? ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the application? ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions? ', 
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the steps to use the application? ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines? ', 
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions? ',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email? ',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What type of license does this project implement? ',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'GNU GPL v3'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => 
        writeToFile('README.md', response)
    );
}

// Function call to initialize app
init();
