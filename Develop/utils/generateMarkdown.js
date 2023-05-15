// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## License

  This application is protected by ${data.license}.

  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
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
