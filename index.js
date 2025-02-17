// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';



// TODO: Create an array of questions for user input
const questions = [
  { type: 'input', name: 'title', message: 'What is the title of your project?' },
  { type: 'input', name: 'description', message: 'Provide a short description of your project:' },
  { type: 'input', name: 'installation', message: 'How do you install the project?' },
  { type: 'input', name: 'usage', message: 'Provide usage instructions:' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPL', 'Apache', 'None'] },
  { type: 'input', name: 'contributing', message: 'How can others contribute?' },
  { type: 'input', name: 'tests', message: 'Provide test instructions:' },
  { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated!')
  );
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();