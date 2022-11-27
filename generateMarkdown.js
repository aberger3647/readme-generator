// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseImages = [
    'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'https://img.shields.io/badge/license-MIT-blue',
    'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
    'https://img.shields.io/badge/license-Unlicense-blue.svg'];
  switch (license) {
    case 'Apache 2.0':
      return licenseImages[0];
      break;
    case 'MIT':
      return licenseImages[1];
      break;
    case 'GPL v3':
      return licenseImages[2];
      break;
    case 'Boost 1.0':
      return licenseImages[3];
      break;
    case 'AGPL v3':
      return licenseImages[4];
      break;
    case 'LGPL v3':
      return licenseImages[5];
      break;
    case 'Unlicense':
      return licenseImages[6];
      break;
    case 'No License':
      return '';
      break;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return `Learn more about [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/).`;
      break;
    case 'MIT':
      return `Learn more about [MIT](https://choosealicense.com/licenses/mit/).`;
      break;
    case 'GPL v3':
      return `Learn more about [GPL v3.](https://choosealicense.com/licenses/apache-2.0/).`;
      break;
    case 'Boost 1.0':
      return `Learn more about [Boost 1.0](https://choosealicense.com/licenses/bsl-1.0/).`;
      break;
    case 'AGPL v3':
      return `Learn more about [AGPL v3](https://choosealicense.com/licenses/agpl-3.0/).`;
      break;
    case 'LGPL v3':
      return `Learn more about [LGPL v3](https://choosealicense.com/licenses/lgpl-3.0/).`;
      break;
    case 'Unlicense':
      return `Learn more about [Unlicense](https://choosealicense.com/licenses/unlicense/).`;
      break;
    case 'No License':
      return '';
      break;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

![License Badge](${renderLicenseBadge(data.license)})

## Description
${data.description}
  
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
${renderLicenseLink(data.license)}
  
## Questions
GitHub Username: ${data.username}\n
You can reach me with any questions at ${data.email}
`;
}

module.exports = generateMarkdown;
