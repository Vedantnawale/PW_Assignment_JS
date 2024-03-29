// Car Description Class.
class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar = new Car("Skoda", "Rapid", 2022);

const carDescription = myCar.getDescription();

console.log(carDescription);
