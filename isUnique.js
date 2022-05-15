// Функция проверки уникальности всех символов в строке:

// Classic
function isUnique(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      obj[string[i]]++;
    } else {
      obj[string[i]] = 1;
    }
  }
  if (Object.values(obj).every((item) => item === 1)) {
    return true;
  }
  return false;
}

// ES6
const isUnique = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== i) {
      return false;
    }
  }
  return true;
};

// Advanced
function isUnique(string) {
  let setObj = new Set();
  for (let i = 0; i < string.length; i++) {
    if (setObj.has(string[i])) {
      return false;
    }
    setObj.add(string[i]);
  }
  return true;
}
console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadefa")); // -> false
