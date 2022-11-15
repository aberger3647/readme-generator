// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseImages = [
    'https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'https://licensebuttons.net/l/zero/1.0/80x15.png',
    'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
    'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    'https://img.shields.io/badge/license-Unlicense-blue.svg'];
    if (license === 'MIT') {
      return licenseImages[0];
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  ![GitHub license](${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)
  
 ## Installation
  ${data.install}
  
## Usage
  ${data.usage}
 
 ## Contributing
  ${data.credit}

## Tests
  ${data.tests}
  
## License
  ${data.license}
  
## Questions
  GitHub Username: ${data.username}
  You can reach me with any questions at ${data.email}
`;
}

module.exports = generateMarkdown;
