const Employee = require("../lib/employee");

describe("Employee", () => {
  it("Create an employee object", () => {
    const employee = new Employee("Matt", 84, "mep.summit@gmail.com");
    expect(employee).toEqual({
      name: "Matt",
      id: 84,
      email: "mep.summit@gmail.com",
    });
  });

  it("Gets the employee's name from the getName fxn", () => {
    const employee = new Employee("Matt", 84, "mep.summit@gmail.com");
    expect(employee.getName()).toEqual("Matt");
  });

  it("Gets the employee's ID from the getId fxn", () => {
    const employee = new Employee("Matt", 84, "mep.summit@gmail.com");
    expect(employee.getId()).toEqual(84);
  });

  it("Gets the employee's email from the getEmail fxn", () => {
    const employee = new Employee("Matt", 84, "mep.summit@gmail.com");
    expect(employee.getEmail()).toEqual("mep.summit@gmail.com");
  });

  it("Gets the employee's role from the getRole fxn", () => {
    const employee = new Employee("Matt", 84, "mep.summit@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});
