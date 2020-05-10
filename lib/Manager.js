// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("lib\Employee.js");

const managerQuestion = [
    {
        type: "input",
        name: "offnumber",
        message: "Enter office number"
    },
    
];

class Manager extends Employee {
    constructor(name, id, email, offnumber) {
       super(name, id, email);
        this.offnumber = offnumber;
        
    }
   getRole(){

   } 
};