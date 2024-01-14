// Employee Class Challenge.
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

const employee = new Employee("Mithun Das", "Software Engineer", 75000);

const employeeSalary = employee.getSalary();

console.log(`Employee Salary: $${employeeSalary}`);

