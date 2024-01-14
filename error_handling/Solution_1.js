// Type Conversion.
function convertToNumber(str) {
    try {
        const result = Number(str);

        if (isNaN(result)) {
            throw new Error("Invalid number");
        }

        return result;
    } catch (error) {
        return "Invalid number";
    }
}

console.log(convertToNumber("123")); 
console.log(convertToNumber("abc")); 