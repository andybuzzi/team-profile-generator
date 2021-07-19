const Employee = require("../lib/Employee");

test("Employee object test", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Name object test", () => {
  const name = "John";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("ID object test", () => {
  const testValue = 1;
  const employee = new Employee("Jane", testValue);
  expect(employee.id).toBe(testValue);
});

test("Email object test", () => {
  const testValue = "jane@email.com";
  const employee = new Employee("Jane", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("Test if can getName()", () => {
  const testValue = "Jane";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("Test if can getId()", () => {
  const testValue = 2;
  const employee = new Employee("Jane", testValue);
  expect(employee.getId()).toBe(testValue);
});

test("Test if can getEmail()", () => {
  const testValue = "jane@email.com";
  const employee = new Employee("Jane", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test('Test getPosition() to return "Employee"', () => {
  const testValue = "Employee";
  const employee = new Employee("Jane", 1, "jane@test.com");
  expect(employee.getPosition()).toBe(testValue);
});
