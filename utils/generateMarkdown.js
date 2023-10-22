function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
  } else {
    return `![License Badge](https://img.shields.io/badge/License-${license}-blue)`
  }
};


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

${data.toc}

# Installation: 
${data.installation}

# Usage: 
${data.usage}

# Contribute: 
${data.contribute}

# Tests: 
${data.tests}

# License: 
${data.license}

`;
}

// module.exports is an object used to store variables or methods
module.exports = generateMarkdown;