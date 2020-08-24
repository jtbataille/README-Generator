// function to generate markdown for README
const license = value => {
  switch (value) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "GNU GLPv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    default :
      return "";
  }
};

const licenseText = (value, name) => {
  switch (value) {
    case "MIT":
      return 
      `'Copyright (c) 2020 ' + ${data.name} +
      
      'Permission is hereby granted, free of charge, to any person obtaining a copy'
      'of this software and associated documentation files (the "Software"), to deal'
      'in the Software without restriction, including without limitation the rights'
      'to use, copy, modify, merge, publish, distribute, sublicense, and/or sell'
      'copies of the Software, and to permit persons to whom the Software is'
      'furnished to do so, subject to the following conditions:'
      
      'The above copyright notice and this permission notice shall be included in all'
      'copies or substantial portions of the Software.'
      
      'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR'
      'IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,'
      'FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE'
      'AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER'
      'LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,'
      'OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE'
      'SOFTWARE.'`;

    case "GNU GLPv3":
      return "Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>";

    case "ISC":
      return "Copyright 2020" + `${data.name}`;

    default :
      return "";
  }
}

function generateMarkdown(data) {
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
  ${licenseText(data.license, data.name)}

  ## Contributors
  ${data.contributors}

  ## Tests
  In order to test this program, use the following command: ${data.tests}

  ## Contact Information
  GitHub Profile: https://github.com/${data.username}
  
  Please email me with any questions at ${data.email}
`;
}

module.exports = generateMarkdown;