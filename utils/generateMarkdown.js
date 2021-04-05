// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'MIT License':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'GNU GPL v3':
      return '[GNU GPL v3](http://www.gnu.org/licenses/gpl-3.0)';
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'Apache License 2.0':
      return 'This code provided under the Apache open-source License version 2.0  ';
    case 'MIT License':
      return 'This code is provided under the MIT open-source license  ';
    case 'GNU GPL v3':
      return 'This code is provided under the GNU GPL v3 open-source license  ';
    case 'None':
      return '  ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)}  
  ## Description  
  ${data.description}  
## Table of Contents  
- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [Test](#test)  
- [Questions](#questions)  
## Installation  
${data.installation}  
## Usage  
${data.usage}  
## License
${renderLicenseSection(data.license)} 
${renderLicenseLink(data.license)}  
## Testing  
${data.test}  
## Questions  
My GitHub profile: [${data.github}](https://github/${data.github})  
My email: [${data.email}](${data.email})  
`;
}

module.exports = generateMarkdown;
