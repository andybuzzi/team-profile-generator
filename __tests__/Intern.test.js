const Intern = require("../lib/Intern");

test("Set school using constructor", () => {
  const testVal = "UT";
  const intern = new Intern("Bob", 1, "bob@email.com", testVal);
  expect(intern.school).toBe(testVal);
});

test('Test getPosition() to return "Intern"', () => {
  const testVal = "Intern";
  const intern = new Intern("Bob", 1, "bob@email.com", "UT");
  expect(intern.getPosition()).toBe(testVal);
});

test("Get school using getSchool()", () => {
  const testVal = "UT";
  const intern = new Intern("Bob", 1, "bob@email.com", testVal);
  expect(intern.getSchool()).toBe(testVal);
});
