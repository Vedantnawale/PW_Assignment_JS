// Check the presence using closures.
function numberChecker(numbersArray) {
    return function(numberToCheck) {
        return numbersArray.includes(numberToCheck);
    };
}

const numbers = [1, 3, 5, 7, 9];
const checkNumber = numberChecker(numbers);

console.log(checkNumber(5)); 
console.log(checkNumber(2)); 
