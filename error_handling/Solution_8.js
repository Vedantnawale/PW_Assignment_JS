// Adding a Method to a Prototype.
function Student(name) {
    this.name = name;
}

Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const studentObject = new Student("Mithun");

studentObject.printDetails(); 