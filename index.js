//node modules
const fs = require("fs");
const inquirer = require("inquirer");

//Creation page
const generateHTML = require("./src/generateHTML");

//Team Objects
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//Team Array
const teamArr = [];

//Manager Questions
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's full name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("\nPlease enter the manager's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("\nPlease enter the manager's ID.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("\nPlease enter a valid email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: (officeInput) => {
          if (isNaN(officeInput)) {
            console.log("\nPlease enter the manager's office number.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmp",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber, confirmAddEmp } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      teamArr.push(manager);
      // console.log(manager);
      if (confirmAddEmp) {
        return addEmployee(teamArr);
      } else {
        return teamArr;
      }
    });
};

//Employee questions
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Add a team member. What is this team member's role?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is this team member's full name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("\nPlease enter team member's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is this team member's ID",
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log("\nPlease enter the team member's ID.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is this team member's email?",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("\nPlease enter a valid email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the team member's GitHub username?",
        when: (data) => data.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("\nPlease enter the engineer's GitHub username.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        when: (data) => data.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("\nPlease enter the intern's school.");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmp",
        message: "Would you like to add more team memebers?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmAddEmp } =
        employeeData;
      let employee = {};
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        // console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        // console.log(employee);
      }
      teamArr.push(employee);

      if (confirmAddEmp) {
        return addEmployee(teamArr);
      } else {
        return teamArr;
      }
    });
};

//fxn to write html file
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        "Team Profile Successfully Created! Check out your new index.html."
      );
    }
  });
};

//Init and final promises to return HTML page
addManager()
  .then((teamArr) => {
    return generateHTML(teamArr);
  })
  .then((fileHTML) => {
    return writeFile(fileHTML);
  })
  .catch((err) => {
    console.log(err);
  });
