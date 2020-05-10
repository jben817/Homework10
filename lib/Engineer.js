// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("lib\Employee.js");

const engineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Enter github username"
    }
];


class Engineer extends Employee {
    constructor(name, id, email, githubusername) {
        super (name, id, email);
        this.githubusername = githubusername;
        
    }
    getGithub() {

    }
    getRole(){
        
    }
}