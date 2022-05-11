// Функция поиска минимального и максимального значений в массиве:

// Classic
function maxMin(num) {
  let min = num.sort((a, b) => a - b)[0];
  let max = num.sort((a, b) => b - a)[0];
  return [min, max];
}

// ES6
function maxMin(num) {
  return [Math.min(...num), Math.max(...num)];
}

console.log(maxMin([3, 2, 10, 24, 18, 99]));
console.log(maxMin([1, 1]));
