// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require ('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Please provide your Github Username.',
    name: 'username'
}, {
    type: 'input',
    message: 'Please provide your email address',
    name: 'email'
}, {
    type: 'input',
    message: 'What would you like to name your Project?',
    name: 'title'
}, {
    type: 'input',
    message: 'Give a detailed description of your project.',
    name: 'description'
}, {
    type: 'input',
    message: 'Please provide installation instructions here.',
    name: 'installation'
}, {
    type: 'list',
    name: 'license',
    message: 'Please select which license you would like to use.',
    choices: [
        'APACHE2.0',
        'BSD3',
        'GPL3.0',
        'MIT',
        'None',
    ],
}, {
    type: 'input',
    message: 'Provide test instructions',
    name: 'tests'
},{
    type: 'input',
    message: 'what is this project used for?',
    name: 'usage'
}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, err => {
        if(err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(userAnswers =>
        {
        writeToFile("README.md", generateMarkdown(userAnswers))
        console.log ('README Complete')
});
};

// Function call to initialize app
init();
