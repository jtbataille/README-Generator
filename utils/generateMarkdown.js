// switch() to run through licensure banner based on user list-selection
const license = value => {
  switch (value) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case "GNU":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case "ISC":
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    default:
      return "";
  }
};

// switch() to run through licensure text based on user list-selection
const licenseFieldText = (value, name) => {
  switch (value) {
    case "MIT":
      return 'Copyright © 2020 ' + name; 
    case "GNU":
      return 'Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>';
    case "ISC":
      return 'Copyright 2020 ' + name;
    default :
      return "";
  }
}

// module turned into a function to be utilized in async function within index.js
module.exports = {
  generateMarkdown: data => {
    
    // use of interpolation (template literals) to create a dynamic README.md file
    return `
# ${data.title}
${license(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Contact Information](#contact-information)

## Installation
As a user, you will need to install the following packages: ${data.installation}

## Usage
${data.usage}

## License
${licenseFieldText(data.license, data.name)}

## Contributors
${data.contributors}

## Tests
In order to test this program, use the following command: 

<code>${data.tests}</code>

## Contact Information
* ${data.name}
  * GitHub Profile: https://github.com/${data.username}
  * Please email me with any questions here: ${data.email}
`;
  }
};