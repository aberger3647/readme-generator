// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of the project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project:',
        choices: ['Apache 2.0', 'MIT', 'GPL v3', 'Boost 1.0', 'AGPL v3', 'LGPL v3', 'Unlicense', 'No License'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test',
    }];

    
    // TODO: Create a function to initialize app
    function init() { 
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('readme.md', answers);
            
            // TODO: Create a function to write README file
            function writeToFile(fileName, data) {
                fs.writeFile('README.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created readme!')
                );
            }
        })

}

// Function call to initialize app
init();