// Функция поиска самого короткого слова:

//Classic->
function checkMinWord(phrase) {
  const phraseToArr = phrase.replace(/[^a-zA-Z ]/gm, "").split(" ");
  let arr = [];

  for (let item of phraseToArr) {
    arr.push(item.length);
  }
  return phraseToArr.filter((elem) => elem.length === Math.min(...arr));
}

// ES6
function checkMinWord(phrase) {
  const phraseToArr = phrase.replace(/[^a-zA-Z ]/gm, "").split(" ");
  return phraseToArr.sort((a, b) => a.length - b.length)[0];
}

console.log(checkMinWord("How are you, Mr?"));
