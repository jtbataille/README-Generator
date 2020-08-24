// function to generate markdown for README
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

module.exports = {
  generateMarkdown: data => {
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
    As a user, you will need to instal the following packages: ${data.installation}
  
    ## Usage
    Here is how you can use this program: ${data.usage}
  
    ## License
    ${licenseFieldText(data.license, data.name)}
  
    ## Contributors
    ${data.contributors}
  
    ## Tests
    In order to test this program, use the following command: ${data.tests}
  
    ## Contact Information
    * ${data.name}
      * GitHub Profile: https://github.com/${data.username}
      * Please email me with any questions here: ${data.email}
  `;
  }
};