const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArr = [""];

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Employee Name"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Employee ID"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Employee Email"
    },
    {
        type: "list",
        name: "employeeType",
        message: "Enter Employee Type",
        choices: ["Intern", "Engineer", "Manager"]
    },
];

const internQuestion = [
    {
        type: "input",
        name: "school",
        message: "Enter school name"
    }
];

const managerQuestion = [
    {
        type: "input",
        name: "offnumber",
        message: "Enter office number"
    }
    
];

const engineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Enter github username"
    }
];

function makeEmployee() {
    inquirer.prompt(employeeQuestions)
        .then(function (answers) {
            //console.log(answers)
            if (answers.employeeType === "Intern") {
                inquirer.prompt(internQuestion)
                    .then(function (internAnswer) {
                        var intEmployee = new Intern(answers.name, answers.id, answers.email, internAnswer.school);
                        employeeArr.push(intEmployee);
                        console.log(employeeArr)
                        buildTeam();
                    })
            }
            if (answers.employeeType === "Engineer") {
                inquirer.prompt(engineerQuestion)
                    .then(function (engineerAnswer) {
                        var engEmployee = new Engineer(answers.name, answers.id, answers.email, engineerAnswer.githubusername);
                        employeeArr.push(engEmployee);
                        console.log(employeeArr)
                        buildTeam();
                    })
            }
            if (answers.employeeType === "Manager") {
                inquirer.prompt(managerQuestion)
                    .then(function (managerAnswer) {
                        var manEmployee = new Manager(answers.name, answers.id, answers.email, managerAnswer.offnumber);
                        employeeArr.push(manEmployee);
                        console.log(employeeArr)
                        buildTeam();
                    })
            }
        })
}

function buildTeam() {
    inquirer.prompt({
        type: "confirm",
        message: "Continue building team? (yes or no)",
        name: "continue"
    }).then(function (answers) {
        console.log(answers)
        if (answers.continue === false) {
            render(employeeArr)
        } else {
            makeEmployee();
        }
    })
}

buildTeam();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
