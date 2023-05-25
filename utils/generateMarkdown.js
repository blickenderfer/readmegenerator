
function renderLicenseBadge(license) { }

function renderLicenseLink(license) { }

function renderLicenseSection(license) { }


function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## License

  This application is protected by ${data.license}.

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ## Credits
  
  ${data.credits}  

  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  You can find me on Github at ${data.github} (https://github.com/${data.github})
  Email me with any questions at ${data.email}
`;
}

module.exports = generateMarkdown;
