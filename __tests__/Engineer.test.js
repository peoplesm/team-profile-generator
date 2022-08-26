const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("Create an engineer object", () => {
    const engineer = new Engineer(
      "Matt",
      84,
      "mep.summit@gmail.com",
      "https://github.com/peoplesm"
    );
    expect(engineer).toEqual({
      name: "Matt",
      id: 84,
      email: "mep.summit@gmail.com",
      github: "https://github.com/peoplesm",
    });
  });

  it("The getGithub method returns the engineer's github username", () => {
    const engineer = new Engineer(
      "Matt",
      84,
      "mep.summit@gmail.com",
      "https://github.com/peoplesm"
    );
    expect(engineer.getGithub()).toEqual("https://github.com/peoplesm");
  });

  it("The getRole method returns the engineer's role", () => {
    const engineer = new Engineer(
      "Matt",
      84,
      "mep.summit@gmail.com",
      "https://github.com/peoplesm"
    );
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
