// Функция нах-ая какая строка встречается чаще всего:

// Classic
function highestFrequency(array) {
  let obj = {};
  let maxUnit = 0;
  let res = "";

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
    if (obj[array[i]] > maxUnit) {
      maxUnit = obj[array[i]];
      res = array[i];
    }
  }
  return res;
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["def", "abc"])); // -> abc
