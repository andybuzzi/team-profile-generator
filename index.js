const inquirer = require("inquirer");
const generateHtml = require("./src/page-template");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let employeeArray = [];

function userPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
          "Add a new manager",
          "Add a new engineer",
          "Add a new intern",
          "Quit Generator",
        ],
      },
    ])

    .then(function (res) {
      if (res.option === "Add a new manager") {
        managerPrompt();
      } else if (res.option === "Add a new engineer") {
        engineerPrompt();
      } else if (res.option === "Add a new intern") {
        internPrompt();
      } else {
        fs.writeFile("index.html", generateHtml(employeeArray), (err) => {
          if (err) throw err;
          console.log(
            "Team profile has been generated! Check out the index.html file to see the output!"
          );
        });
      }
    });
}

function nextStep() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do next?",
        choices: ["Add a new engineer", "Add a new intern", "Quit Generator"],
      },
    ])

    .then(function (res) {
      if (res.option === "Add a new manager") {
        managerPrompt();
      } else if (res.option === "Add a new engineer") {
        engineerPrompt();
      } else if (res.option === "Add a new intern") {
        internPrompt();
      } else {
        fs.writeFile("index.html", generateHtml(employeeArray), (err) => {
          if (err) throw err;
          console.log(
            "Team profile has been generated! Check out the index.html file to see the output!"
          );
        });
      }
    });
}

function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter new manager's full name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter new manager ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter new manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter their office number",
      },
    ])

    .then(function (res) {
      console.log("Manager has been sucessfully added.");
      const manager = new Manager(
        res.name,
        res.id,
        res.email,
        res.officeNumber
      );
      employeeArray.push(manager);

      nextStep();
    });
}

function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter new engineer's full name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter new  employee's ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the new employee's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter employee's GitHub username:",
      },
    ])
    .then(function (res) {
      const engineer = new Engineer(res.name, res.id, res.email, res.github);
      employeeArray.push(engineer);
      console.log("Engineer has been sucessfully added.");
      nextStep();
    });
}

function internPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter new intern's full name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter new intern ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter intern's school:",
      },
    ])
    .then(function (res) {
      const intern = new Intern(res.name, res.id, res.email, res.school);
      employeeArray.push(intern);
      console.log("Intern has been sucessfully added.");
      nextStep();
    });
}

userPrompt();
