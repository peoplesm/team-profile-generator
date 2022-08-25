const inquirer = require("inquirer");
const {
  questionsRole,
  questionsBio,
  questionsEng,
  questionsManager,
  questionsIntern,
  questionsContinue,
} = require("./questions");

getRole = () => {
  const role = inquirer.prompt(questionsRole);
  return role;
};

getBio = () => {
  const bio = inquirer.prompt(questionsBio);
  return bio;
};

getRoleQuestions = () => {
  let empInfo = {};
  switch (role) {
    case "Intern":
      empInfo = getInternInfo();
      break;
    case "Engineer":
      empInfo = getEngineerInfo();
      break;
    default:
      empInfo = getManagerInfo();
  }
};

getInternInfo = () => {
  const internInfo = inquirer.prompt(questionsIntern);
  return internInfo;
};

getEngineerInfo = () => {
  const engineerInfo = inquirer.prompt(questionsEng);
  return engineerInfo;
};

getManagerInfo = () => {
  const managerInfo = inquirer.prompt(questionsManager);
  return managerInfo;
};

confirmContinue = async () => {
  try {
    const confirm = await inquirer.prompt(questionsContinue);
    return confirm.continue;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRole,
  getBio,
  getRoleQuestions,
  getInternInfo,
  getEngineerInfo,
  getManagerInfo,
  confirmContinue,
};
