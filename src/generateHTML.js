function createManager(manager) {
  return `<h1>${manager.name}</h1>`;
}

function createEngineer(engineer) {
  return `<h1>${engineer.name}</h1>`;
}

function createIntern(intern) {
  return `<h1>${intern.name}</h1>`;
}

function generateHTML(teamArr) {
  docArr = [];
  for (let i = 0; i < teamArr.length; i++) {
    const emp = teamArr[i];
    const role = emp.getRole();
    if (role === "Manager") {
      const managerCard = createManager(emp);
      docArr.push(managerCard);
    } else if (role === "Engineer") {
      const engineerCard = createEngineer(emp);
      docArr.push(engineerCard);
    } else if (role === "Intern") {
      const internCard = createIntern(emp);
      docArr.push(internCard);
    }
  }

  const generateDoc = generateDocPage(docArr.join(""));
  return generateDoc;
}

function generateDocPage(empCards) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>HEllo my name is ${empCards}</h1>
    </body>
  </html>`;
}

module.exports = generateHTML;
