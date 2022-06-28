// Функция проверки являются ли элементы анаграммами

// Classic

function isAnagrams(s1, s2) {
  let obj = {};
  if (s1.length !== s2.length) false;

  for (let i = 0; i < s1.length; i++) {
    if (obj[s1[i]]) {
      obj[s1[i]]++;
    } else {
      obj[s1[i]] = 1;
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (obj[s2[j]]) {
      obj[s2[j]]--;
    } else {
      return "not anagram";
    }
  }
  if (Object.values(obj).every((item) => item === 0)) {
    return true;
  }
}

// ES6

const isAnagrams = (s1, s2) => {
  if (s1.length !== s2.length) false;
  return s1.toLowerCase().split("").sort().join("") ===
    s2.toLowerCase().split("").sort().join("")
    ? true
    : false;
};

console.log(isAnagrams("rrat", "aatr"));
console.log(isAnagrams("rrat", "aatr"));
