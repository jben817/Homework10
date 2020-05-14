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
        return this.name;
    }
    getId() {
        return this.id;

    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";


    }
}


module.exports = Employee