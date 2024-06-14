// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
        default:
          return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
  This project is licensed under the ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any question contact me at ${data.email}. You acn also go to my github for more information  [${data.github}](https://github.com/${data.github}).`;

}

module.exports = generateMarkdown;
