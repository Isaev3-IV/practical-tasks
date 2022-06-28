// Функция вывода чисел от 1 до n (n - передаваемый аргумент):

//Classic
function fooBar(num) {
  let str = "";

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      str += "foobar, ";
    } else if (i % 3 === 0) {
      str += "foo, ";
    } else if (i % 5 === 0) {
      str += "bar, ";
    } else {
      str += `${i}, `;
    }
  }
  return str.slice(0, str.length - 2);
}

console.log(fooBar(15));
