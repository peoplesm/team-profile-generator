//Fxns to generate card based on role
function createManager(manager) {
  return `<div class="card" style="width: 18rem">
  <div class="card-body card-header">
    <h4 class="card-title">${manager.name}</h4>
    <h6 class="card-subtitle mb-2"><i class="bi bi-cup-hot"></i> Manager</h6>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
</div>`;
}

function createEngineer(engineer) {
  return `<div class="card" style="width: 18rem">
  <div class="card-body card-header">
    <h4 class="card-title">${engineer.name}</h4>
    <h6 class="card-subtitle mb-2"><i class="bi bi-eyeglasses"></i> Engineer</h6>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item">GitHub Name: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
  </div>
</div>`;
}

function createIntern(intern) {
  return `<div class="card" style="width: 18rem">
  <div class="card-body card-header">
    <h4 class="card-title">${intern.name}</h4>
    <h6 class="card-subtitle mb-2"><i class="bi bi-mortarboard"></i> Intern</h6>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>
</div>`;
}

//Fxn to determine which card to generate based on the employee's role
function generateHTML(teamArr) {
  //Array of HTML strings from the generated cards
  docArr = [];
  for (let i = 0; i < teamArr.length; i++) {
    const emp = teamArr[i];
    // console.log(emp);
    const role = emp.getRole();
    // console.log(role);
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

//HTML Template for generated team roster
function generateDocPage(empCards) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
      <link href="./css/style.css" rel="stylesheet">
      <title>Team Profile</title>
    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
      <div class="container">
        ${empCards}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossorigin="anonymous"
        ></script>
      </div>
    </body>
  </html>
  `;
}

//Export so index.js can use generateHTML fxn
module.exports = generateHTML;
