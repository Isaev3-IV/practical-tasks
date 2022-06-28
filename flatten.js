// Функция распаковки массива:

// Classic
function flatten(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const functionCall = flatten(array[i]);
      for (let j = 0; j < functionCall.length; j++) {
        newArr.push(functionCall[j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
