// Функция суммирования всех цифр числа:

// Classic
function sumDigits(number) {
  const numberArr = Math.abs(number).toString();
  let res = 0;
  for (let item of numberArr) {
    res += +item;
  }
  return res;
}

// ES6
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, current) => sum + +current, 0);
}

console.log(sumDigits(-932));
