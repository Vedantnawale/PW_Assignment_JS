// Access random elements.
function extractElements(arr) {
    const [first, second, ...rest] = arr;

    const last = rest[rest.length - 1];

    return [first, second, last];
}

// Example 
const inputArray = [1, 2, 3, 4, 5];
const result = extractElements(inputArray);

console.log(result); 
