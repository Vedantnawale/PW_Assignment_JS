// Nested Objects.

function extractNameAndStreet(person) {
    const { name, age , address: { street, city, state } } = person;
  
    return { name, age, street, city, state };
  }
  
  // Example 
  const personObject = {
    name: "Mithun",
    age : 21,
    address: {
      street: "BB, Block B, Industrial Area.",
      city : "Sector 62, Noida",
      state : "Uttar Pradesh",
    }
  };
  
  const result = extractNameAndStreet(personObject);

  console.log(result);
  