// function to retun a license badge based on liscense used
// If none, it will return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
  } else {
    return `![License Badge](https://img.shields.io/badge/License-${license}-blue)`
  }
};

// Function that returns the license link
// If non, it will return an empty string
function renderLicenseLink(license) {
if (license === 'none') {
 return ''
} else {
  return  `[${license} License](https://choosealicense.com/licenses/${license}/)`
 }
};

// Function that returns the liscense portion of the README
// If none, ir will return an empty string
function renderLicenseSection(license) {
if (license === 'none') {
  return ''
} else {
 return `## License`
}
};

// Function to generate markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

# Username: 
${data.username}

# Title:
${data.title}

# Description:
${data.description}

# Table of Contents 
- [Installation](#installtion)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#questions)

## Installation
${data.installation}

# Installation: 
${data.installation}

# Usage: 
${data.usage}

# Contribute: 
${data.contribute}

# Tests: 
${data.tests}

${renderLicenseSection(data.license)}
For more information visit: ${renderLicenseLink(data.license)}
`;
}

// module.exports is an object used to store variables or methods
module.exports = generateMarkdown;