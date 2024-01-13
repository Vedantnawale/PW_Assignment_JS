// Count the occurrences.

function wordCountGenerator(inputString) {
    const wordCountMap = new Map();
  
    const words = inputString.split(/\s+/);
  
    words.forEach((word) => {
      // Remove non-alphabetic characters (if any)
      const cleanedWord = word.replace(/[^a-zA-Z]/g, '');

      const lowercaseWord = cleanedWord.toLowerCase();

      if (wordCountMap.has(lowercaseWord)) {
        wordCountMap.set(lowercaseWord, wordCountMap.get(lowercaseWord) + 1);
      } else {
        wordCountMap.set(lowercaseWord, 1);
      }
    });
  
    return wordCountMap;
  }
  
  // Example 
  const inputText = "Hello I am XYZ Try to solve PW Assignment";
  const result = wordCountGenerator(inputText);
  
  console.log(result);
  