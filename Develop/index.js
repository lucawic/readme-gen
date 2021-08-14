// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Please provide your Github Username.',
    name: 'Username'
}, {
    type: 'input',
    message: 'Please provide your email address',
    name: 'Email'
}, {
    type: 'input',
    message: 'What would you like to name your Project?',
    name: 'Project Title'
}, {
    type: 'input',
    message: 'Give a detailed description of your project.',
    name: 'Project Description'
}, {
    type: 'input',
    message: 'Please provide installation instructions here.',
    name: 'Install'
}, {
    type: 'list',
    message: 'Please select which license you would like to use.',
    choices: [
        
    ],
}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, function(err) {
        if(error) {
            return console.log(error)
        }
        console.log ('successfully wrote: ' + fileName);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
