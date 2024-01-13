// Greeting Promise.

function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        const greetingMessage = `Hello, ${name}!`;
        resolve(greetingMessage);
      } else {
        reject(new Error("Name is required."));
      }
    });
  }

  const inputName = "Mithun";
  greetWithPromise(inputName)
    .then((greeting) => {
      console.log(greeting); 
    })
    .catch((error) => {
      console.error(error.message);
    });
  