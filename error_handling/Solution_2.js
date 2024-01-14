// Building Robust Functions in JavaScript
function getPerson(person) {
    try {
        if (typeof person === 'object' && person !== null && 'name' in person && 'age' in person) {
            const name = person.name;
            const age = person.age;

            return `Name: ${name}, Age: ${age}`;
        } else {
            throw new Error("Invalid parameter type");
        }
    } catch (error) {
        return error.message;
    }
}

const validPerson = { name: "Mithun", age: 25 };
const invalidPerson = { name: "Mithun" };
const anotherInvalid = ["name", "Mithun"]

console.log(getPerson(validPerson));
console.log(getPerson(invalidPerson)); 
console.log(getPerson(anotherInvalid)); 
