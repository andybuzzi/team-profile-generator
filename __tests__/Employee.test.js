const Employee = require("../lib/Employee");

test("Employee object test", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

test("Name object test", () => {
  const name = "John";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("ID object test", () => {
  const testValue = 1;
  const emp = new Employee("Jane", testValue);
  expect(emp.id).toBe(testValue);
});

test("Email object test", () => {
  const testValue = "jane@email.com";
  const emp = new Employee("Jane", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Test if can getName()", () => {
  const testValue = "Jane";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Test if can getId()", () => {
  const testValue = 2;
  const emp = new Employee("Jane", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Test if can getEmail()", () => {
  const testValue = "jane@email.com";
  const emp = new Employee("Jane", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test('Test getPosition() to return "Employee"', () => {
  const testValue = "Employee";
  const emp = new Employee("Jane", 1, "jane@test.com");
  expect(emp.getPosition()).toBe(testValue);
});
