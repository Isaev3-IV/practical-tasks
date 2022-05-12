// Функция возврата уникальных значений из нескольких массивов:

// Advanced
function uniqueArr() {
  return [...new Set([...arguments].flat())];
}

// ES6
const uniqueArr = (...arrList) => {
  const arr = [...arrList].join(",").split(",");
  let resArr = [];
  for (let item of arr) {
    resArr.push(+item);
  }
  return resArr.filter((item, i) => resArr.indexOf(item, 0) === i);
};

console.log(uniqueArr([1, 2, 3], [4, 5, 2], [6, 4, 7, 10]));
