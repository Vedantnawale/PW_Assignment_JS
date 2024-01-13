// Double using callback.

function doubleArrayWithCallback(arr, callback) {

    const doubledArray = arr.map(callback);
  
    return doubledArray;
  }

  const inputArray = [1, 2, 3, 4, 5];
  
  const doubleCallback = (num) => num * 2;
  
  const result = doubleArrayWithCallback(inputArray, doubleCallback);

  console.log(result);
  