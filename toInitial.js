// Функция создания инициалов:

//Classic->
function toInitial(names) {
  let str = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i] === " ") {
      str = `${names[0]}. ${names[i + 1]}.`.toUpperCase();
    }
  }
  return str;
}

// ES6
function toInitial(names) {
  let separateArr = names.split(" ");
  let str = "";

  for (let item of separateArr) {
    str += `${item[0].toUpperCase()}. `;
  }
  return str;
}

//-------------------
function toInitial(names) {
  let separateArr = names.split(" ");

  return separateArr.map((elem) => `${elem[0].toUpperCase()}.`).join(" ");
}

console.log(toInitial("Tsoy Sergey"));
