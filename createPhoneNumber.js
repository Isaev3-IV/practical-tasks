// Функция форматирования цифр в телефонный номер:

//Classic
function createPhoneNumber(number) {
  let arr = number;

  return `+${arr.slice(0, 1)}(${arr.slice(1, 4)}) 
  ${arr.slice(4, 7)} - ${arr.slice(7, 11)}`;
}

console.log(createPhoneNumber("79013801417"));
