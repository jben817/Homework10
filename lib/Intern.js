// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

const internQuestion = [
    {
        type: "input",
        name: "school",
        message: "Enter school name"
    },
];


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern