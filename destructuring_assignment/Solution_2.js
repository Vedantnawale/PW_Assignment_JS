// Only unique items are allowed.
function removeDuplicates(inputArray) {
    const uniqueSet = new Set(inputArray);
    const uniqueArray = [...uniqueSet];
    return uniqueArray;
  }
  
  // Example 
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const result = removeDuplicates(inputArray);

  console.log(result);
  