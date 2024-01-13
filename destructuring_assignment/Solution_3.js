// Access random elements.
function swapVariables(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
  
  let a = 5;
  let b = 10;

  const result = swapVariables(a, b);
  
  console.log(result); 
  
  // The original variables a and b remain unchanged
  console.log(a);  
  console.log(b);  
  