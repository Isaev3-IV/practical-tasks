// Функция возврата индексов заглавных букв строки:

//Classic
function getIndexWord(word) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      arr.push(i);
    }
  }
  return arr;
}

//ES6
function getIndexWord(word) {
  let arr = [];
  word
    .split("")
    .filter((item, i) => (item === item.toUpperCase() ? arr.push(i) : ""));
  return arr;
}

console.log(getIndexWord("ExpReSsioN"));
