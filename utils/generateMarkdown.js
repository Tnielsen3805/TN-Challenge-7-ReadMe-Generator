// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  const badges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    GPL: "![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)",
    Apache: "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-green.svg)",
    BSD: "![License: BSD](https://img.shields.io/badge/License-BSD-orange.svg)"
  };
  return badges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  const links = {
    MIT: "https://opensource.org/licenses/MIT",
    GPL: "https://www.gnu.org/licenses/gpl-3.0",
    Apache: "https://www.apache.org/licenses/LICENSE-2.0",
    BSD: "https://opensource.org/licenses/BSD-3-Clause"
  };
  return links[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License

This project is licensed under the ${license} license. For more details, see [this link](${renderLicenseLink(license)}).`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Find me on GitHub: [${data.github}](https://github.com/${data.github})  
For additional questions, email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
