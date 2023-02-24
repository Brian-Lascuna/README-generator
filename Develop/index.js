// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'README.md';
const generateMarkdown = require('./utils/generateMarkdown')

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'desc1'
    },
    {
        type: 'input',
        message: 'Why did you build this project? (Be descriptive)',
        name: 'desc2'
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'desc3'
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'desc4'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Provide instructions on how to use your project: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List and credit any collaborators, third-party assets, or tutorials used: ',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'What license do you want to use?',
        choices: [
            'MIT',
            'GPLv2',
            'Apache'
        ],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Add any information on how to contribute to your project: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Provide any test commands for your project: ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Provide github profile: ',
        name: 'githubProf'
    },
    {
        type: 'input',
        message: 'Provide email for contact: ',
        name: 'email'
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File written successfully!");
    })
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
           let data = generateMarkdown(response);
           writeToFile(fileName, data);
        })
}

// Function call to initialize app
init();
