// Функция создания набора дубликатов символов строки:

// Classic
function accumSymbol(stroke) {
  let str = "";

  for (let i = 0, j = 1; i < stroke.length; i++, j++) {
    for (let k = 0; k < j; k++) {
      k === 0
        ? (str += stroke[i].toUpperCase())
        : (str += stroke[i].toLowerCase());
    }
    str += `-`;
  }

  return str.substring(0, str.length - 1);
}

// ES6
function accumSymbol(stroke) {
  return stroke
    .toUpperCase()
    .split("")
    .map((item, i) => `${item}${item.repeat(i).toLowerCase()}`)
    .join("-");
}
console.log(accumSymbol("abcd"));
