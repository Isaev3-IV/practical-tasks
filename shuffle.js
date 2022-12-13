// Заполнить матрицу 10×10 случайными числам от 1 до 100 без повторений;

let box = Array(100)
  .fill()
  .map((_, i) => i + 1);

function shuffle(array) {
  let lengthArr = box.length;
  let randomIndex = 0,
    temp;
  let res = [];

  while (lengthArr--) {
    randomIndex = Math.floor(Math.random() * (lengthArr + 1));

    temp = array[lengthArr];
    array[lengthArr] = array[randomIndex];
    array[randomIndex] = temp;
  }
  for (let i = 0; i < array.length; i += 10) {
    res.push([
      array[i],
      array[i + 1],
      array[i + 2],
      array[i + 3],
      array[i + 4],
      array[i + 5],
      array[i + 6],
      array[i + 7],
      array[i + 8],
      array[i + 9],
    ]);
  }
  return res;
}

console.log(shuffle(box));
