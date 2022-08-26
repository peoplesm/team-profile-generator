const Intern = require("../lib/intern");

describe("Intern", () => {
  it("Create an intern object", () => {
    const intern = new Intern(
      "Matt",
      84,
      "mep.summit@gmail.com",
      "University of Colorado"
    );
    expect(intern).toEqual({
      name: "Matt",
      id: 84,
      email: "mep.summit@gmail.com",
      school: "University of Colorado",
    });
  });

  it("The getSchool method returns the intern's school name", () => {
    const intern = new Intern(
      "Matt",
      84,
      "mep.summit@gmail.com",
      "University of Colorado"
    );
    expect(intern.getSchool()).toEqual("University of Colorado");
  });

  it("The getRole method returns the intern's role", () => {
    const intern = new Intern(
      "Matt",
      84,
      "mep.summit@gmail.com",
      "University of Colorado"
    );
    expect(intern.getRole()).toEqual("Intern");
  });
});
