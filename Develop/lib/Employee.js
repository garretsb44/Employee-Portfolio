// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName() {
        return this.name 
    }
    getId(){
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}
const person = new Employee("Susan", 1, "susan@ymail.com")

    person.getName(); 
    person.getId(); 
    person.getEmail(); 
    person.getRole();
 
  
 module.exports = Employee;


