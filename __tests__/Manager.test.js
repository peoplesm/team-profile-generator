const Manager = require("../lib/manager");

describe("Manager", () => {
  it("Create an manager object", () => {
    const manager = new Manager("Matt", 84, "mep.summit@gmail.com", 8);
    expect(manager).toEqual({
      name: "Matt",
      id: 84,
      email: "mep.summit@gmail.com",
      officeNumber: 8,
    });
  });

  it("Gets the manager's office number from the getOfficeNumber fxn", () => {
    const manager = new Manager("Matt", 84, "mep.summit@gmail.com", 8);
    expect(manager.getOfficeNumber()).toEqual(8);
  });

  it("Gets the manager's role from the getRole fxn", () => {
    const manager = new Manager("Matt", 84, "mep.summit@gmail.com", 8);
    expect(manager.getRole()).toEqual("Manager");
  });
});
