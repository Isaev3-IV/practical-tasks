// Функция трансформации букв в заглавный регистр:

// Classic

function upperCaseWord(str) {
  let res = "";
  for (let item of str.split(" ")) {
    res += `${item[0].toUpperCase()}${item.slice(1)} `;
  }
  return res;
}

// ES6

const upperCaseWord = (str) => {
  let arr = str.split(" ");
  return arr.map((item) => `${item[0]}${item.slice(1)}`).join(" ");
};

console.log(upperCaseWord("Регулярное выражение позволяет задать шаблон"));
