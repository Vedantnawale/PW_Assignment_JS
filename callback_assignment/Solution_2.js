// String Manipulation.
function manipulateString(inputString) {
    const manipulatedString = inputString.toUpperCase();
  
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    return logString;
  }
  
  // Example usage:
  const input = "Hello, World!";
  const logCallback = manipulateString(input);
  
  logCallback();
 
  