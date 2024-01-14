// Using Static Method to Add Two Numbers with Calculator Class
class Calculator {
    static add(num1, num2) {
        return num1 + num2;
    }
}

const calculatorInstance = new Calculator();

const sum = Calculator.add(5, 7);

console.log(`Sum: ${sum}`); 
