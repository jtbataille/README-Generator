// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

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
  This application is covered under the ${data.license} license.

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
