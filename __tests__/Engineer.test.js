const Engineer = require("../lib/engineer");

test("Set GitHub account", () => {
  const testVal = "githubUser";
  const engineer = new Engineer("Jean", 1, "jean@email.com", testVal);
  expect(engineer.github).toBe(testVal);
});

test('Test getPosition() to return "Engineer"', () => {
  const testVal = "Engineer";
  const engineer = new Engineer("Jean", 1, "jean@email.com", "githubUser");
  expect(engineer.getPosition()).toBe(testVal);
});

test("Test GitHub username using getGithub()", () => {
  const testVal = "githubUser";
  const engineer = new Engineer("Jean", 1, "jean@email.com", testVal);
  expect(engineer.getGitHub()).toBe(testVal);
});
