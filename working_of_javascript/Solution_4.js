{
    // Demonstrate hoisting with 'let'
    // console.log("Before let declaration:", letVariable); // It Throws Error
    let letVariable = "I am a let variable";
    console.log("After let declaration:", letVariable);
  }
  
  {
    // Demonstrate hoisting with 'var'
    console.log("Before var declaration:", varVariable); // It Throw Undefined
    var varVariable = "I am a var variable";
    console.log("After var declaration:", varVariable);
  }
  
  {
    // Demonstrate hoisting with 'const'
    // console.log("Before const declaration:", constVariable); // This will result in an error as const doesn't get hoisted
    const constVariable = "I am a const variable";
    console.log("After const declaration:", constVariable);
  }
  