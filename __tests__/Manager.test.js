const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee");

test("Set office number using constructor", () => {
  const testVal = 80;
  const manager = new Manager("Liz", 1, "liz@email.com", testVal);
  expect(manager.officeNumber).toBe(testVal);
});

test('Test getPosition() to return "Manager"', () => {
  const testVal = "Manager";
  const manager = new Manager("Liz", 1, "liz@email.com", 100);
  expect(manager.getPosition()).toBe(testVal);
});

test("Get office number using getOfficeNumber()", () => {
  const testVal = 32;
  const manager = new Manager("Liz", 1, "liz@email.com", testVal);
  expect(manager.getOfficeNumber()).toBe(testVal);
});
