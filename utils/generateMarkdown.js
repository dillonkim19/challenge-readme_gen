// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const licenseData = JSON.stringify(data.license);
  // console.log(licenseData)
  // // licenseData.replace(/\//g, 'ForwardSlash');
  // // console.log(licenseData)
  // var newLicenseData = JSON.parse(licenseData)
  // console.log(newLicenseData)
  // newLicenseData = JSON.parse(newLicenseData);
  // console.log('new license', newLicenseData);
  // console.log(typeof newLicenseData)
  // console.log('description', newLicenseData.desc)


  return `# ${data.projectTitle} 
${data.license.license}
## Description
${data.description}

## Content of the File
[Installation Instructions](#installation-instructions)

[Usage Information](#usage-information)

[Contribution Guidelines](#contribution-guidelines)

[Test Instructions](#test-instructions)

[License](#license)

[Questions](#questions)

## Installation Instructions
${data.installInstruct}

## Usage Information
${data.usageInfo}

## Contribution Guidelines
${data.contributionGuidelines}

## Test Instructions
${data.testInstruct}

## License
Please visit below link for more information

${data.license.desc}

## Questions
If you have any questions or concerns, please contact me through my email below: 

${data.email}

[github.com/${data.github}](https://www.github.com/${data.github})

  `;
}

module.exports = generateMarkdown;
