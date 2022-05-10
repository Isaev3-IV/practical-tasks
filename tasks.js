// Функция создания инициалов:

//Classic->
function toInitial(names) {
  let separateArr = names.split(" ");
  let str = "";

  for (let i = 0; i < separateArr.length; i++) {
    str += `${separateArr[i].slice(0, 1)}. `;
  }
  return str.toUpperCase();
}

// ES6
function toInitial(names) {
  let separateArr = names.split(" ");

  return separateArr
    .map((elem) => `${elem.slice(0, 1)}.`)
    .join(" ")
    .toUpperCase("");
}

console.log(toInitial("Tsoy Sergey"));
