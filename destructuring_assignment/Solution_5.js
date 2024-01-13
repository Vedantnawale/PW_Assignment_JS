// Min and max values.
function findMaxAndMin(arr) {
  
    const max = Math.max(...arr); // Math.max() used for finding the maximum value in an array.
    const min = Math.min(...arr); // Math.min() used for finding the minimum value in an array.
  
    return { max, min };
  }
  
  // Example
  const inputArray = [5, 2, 7, 1, 9];
  const result = findMaxAndMin(inputArray);

  console.log(result); 
  