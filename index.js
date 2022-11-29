// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// description, installation instructions, usage information, contribution guidelines, and test instructions
// choose a license -> badge of license at the top and explanation in license section
// github username -> Questions section with github link
// email -> Questions section with instructions on how to contact
const questions = [
    {
        type: 'input',
        message: 'What is the name of your readme file?',
        name: 'fileName'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Enter a description of the project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions: ',
        name: 'installInstruct'
    },
    {
        type: 'input',
        message: 'Enter usage information: ',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'Enter contribtution guidelines: ',
        name: 'contributionGuidelines'
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'testInstruct'
    },
    {
        type: 'list',
        message: 'Choose a license: ',
        name: 'license',
        choices: [
            //{name: 'MIT', value: '{"desc":"[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)", "license":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}'},
            {
                name: 'MIT', 
                value: {
                    "desc":"[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)", 
                    "license":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                }
            },
            {
                name: 'Apache 2.0', 
                value: {
                    "desc":"[https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)", 
                    "license":"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                }
            },
            {
                name: 'GNU GPL v3', 
                value: {
                    "desc":"[https://www.gnu.org/licenses/gpl-3.0.en.html](https://www.gnu.org/licenses/gpl-3.0.en.html)", 
                    "license":"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                }
            },
            {
                name: 'Other', 
                value: {
                    "desc":"input your license badge here.", 
                    "license":"Input your own License here."
                }
            }, 
        ]
    }, //[github.com/${data.github}](https://www.github.com/${data.github})
    {
        type: 'input',
        message: 'Enter your github username: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email: ',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`${fileName}.md`, data)
}

// TODO: Create a function to initialize app
function init() {

    const prompt = inquirer.createPromptModule();
    prompt(questions)
    .then((response) => {
        // console.log(response)
        const fileContent = generateMarkdown(response)
        writeToFile(response.fileName, fileContent)
    })
    // not sure which way is "better"
    // inquirer
    //    .prompt(questions)
    //    .then((response) => {
    //     console.log(response)
    //    })

}

// Function call to initialize app
init();
