// Age in Days.
function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
  
    const ageInDays = person.age * 365; 
  
    function logMessage() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
  
    return logMessage;
  }
  
  const personInfo = {
    firstName: "Mithun S",
    lastName: "Chakraborty",
    age: 24,
  };
  
  const logCallback = ageInDays(personInfo);
  
  logCallback(); 