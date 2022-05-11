// Функция суммирования всех цифр числа:

// Classic
function sumDigits(number) {
  let res = 0;
  for (let item of Math.abs(number).toString()) {
    res += +item;
  }
  return res;
}

// ES6
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, current) => +sum + +current, 0);
}

console.log(sumDigits(-932));
