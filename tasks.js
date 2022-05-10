//Classic->
function checkMinWord(phrase) {
  const newStroke = phrase.replace(/[^a-zA-Z ]/gm, " ");
  const phraseToArr = newStroke.split(" ");
  const newArr = [];

  for (let item of phraseToArr) {
    if (item) {
      newArr.push(item);
    }
  }
  return newArr.sort((a, b) => a.length - b.length)[0];
}

// ES6
function checkMinWord(phrase) {
  const newStroke = phrase.replace(/[^a-zA-Z ]/gm, "");
  const phraseToArr = newStroke.split(" ");
  let arr = [];

  for (let item of phraseToArr) {
    if (item) {
      arr.push(item.length);
    }
  }
  return phraseToArr.filter((elem) => elem.length === Math.min(...arr));
}

console.log(checkMinWord("How are you, Mr?"));
