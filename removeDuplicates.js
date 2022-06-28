// Функция удаления всех повторяющихся значений в строке

// Classic
function removeDuplicates(str) {
  let newObj = {};
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (newObj[str[i]]) {
      newObj[str[i]]++;
    } else {
      newObj[str[i]] = 1;
    }
  }

  return Object.keys(newObj).join("");
}

// ES6
const removeDuplicates = (str) => {
  const res = [];
  const set = new Set(str.split(""));
  for (let item of set) {
    res.push(item);
  }
  return res.join("");
};

console.log(removeDuplicates("abcd")); // -> 'abcd'
console.log(removeDuplicates("aabbccdd")); // -> 'abcd'
console.log(removeDuplicates("abcddbca")); // -> 'abcd'
console.log(removeDuplicates("abababcdcdcd")); // -> 'abcd'
