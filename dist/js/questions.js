const questionsRole = [
  {
    type: "rawlist",
    name: "role",
    message: "Select the employee's role",
    choices: ["Intern", "Engineer"],
  },
];

const questionsBio = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's full name?",
    default: "Matt Peoples",
  },
  {
    type: "input",
    name: "empId",
    message: "What is the employee's ID",
    default: "1",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email address?",
    default: "mep.summit@gmail.com",
  },
];

const questionsEng = [
  {
    type: "input",
    name: "githubUserName",
    message: "What is your GitHub username?",
    default: "peoplesm",
  },
];

const questionsManager = [
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
    default: "84",
  },
];

const questionsIntern = [
  {
    type: "input",
    name: "school",
    message: "What school does this intern attend?",
    default: "CU",
  },
];

const questionsContinue = [
  {
    type: "confirm",
    name: "continue",
    message: "Would you like to add more members to your team?",
    default: "true",
  },
];

module.exports = {
  questionsRole,
  questionsBio,
  questionsEng,
  questionsManager,
  questionsIntern,
  questionsContinue,
};
