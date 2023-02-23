// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'GPLv2':
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'GPLv2':
        return '[GNU GPL v2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      case 'Apache':
        return '[Apache License](https://opensource.org/licenses/Apache-2.0)';
    } 
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return '[License](#license)';  
  }
  else {
    return '';
  }
}

function getUser(username) {
  if (username) {
    fetch(`https://api.github.com/users/${username}`)
        .then( response => response.json())
        .then( response => {return `[Github](${response.html_url})`;})
        .catch( err => console.error(err));
  }
  else {
    return 'Github N/A';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const github = getUser(data.github);

  const markdown = `# ${data.title} ${licenseBadge}

  ## Description
  ${data.desc1} ${data.desc2} ${data.desc3} ${data.desc4}
  
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  ${licenseSection}
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  ${licenseLink}
  
  ## How to Contribute
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  ${github}

  You can contact me through the following:
  Email: ${data.email}`;

  return markdown;
}

module.exports = generateMarkdown;
