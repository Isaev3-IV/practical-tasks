// Функция поиска гласных букв в строке:

// Classic

function findVowels(str) {
  const alphabet = ["a", "e", "y", "u", "i", "o"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (str[i] === alphabet[j]) {
        count++;
      }
    }
  }
  return count;
}

// ES6

const findVowels = (str) => {
  const matches = str.match(/[eyuioa]/g);
  if (matches) {
    return matches.length;
  } else {
    0;
  }
};
console.log(findVowels("Hello World"));
