const inquirer = require("inquirer");

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

];
// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        inquirer.prompt(employeeQuestions.name).then (answers =>{
            // not sure what to do
        })
        console.log(`Id: ${this.name}`);

    }
    getID() {
        inquirer.prompt(employeeQuestions.id).then (answers =>{
            // not sure what to do
        })
        console.log(`Id: ${this.id}`);

    }
    getEmail() {
        inquirer.prompt(employeeQuestions.name).then (answers =>{
            // not sure what to do
        })
        console.log(`Email: ${this.email}`);

    }
    getRole() {
        console.log("Employee")


    }
}


    module.export = Employee