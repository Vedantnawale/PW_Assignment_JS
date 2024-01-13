
// multiplyNumAer(3, 4); // This will result in an error because function expressions are not hoisted

const multiplyNumAer = function(a, b) {
  return a * b;
};

// Now, let's use the function expression
const product = multiplyNumAer(5, 6);
console.log(product); 
