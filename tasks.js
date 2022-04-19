//Функция проверки палиндрома:

//Classic->
function isPalindrome(word) {
  let firstList = "";
  let secondList = "";

  for (let i = 0, k = word.length - 1; k > 0, i < word.length; i++, k--) {
    firstList += word[i];
    secondList += word[k];
  }
  if (firstList === secondList) {
    return "Function is Polindrom!";
  }
  return "Function is not Polindrom!";
}

//ES6->
const isPalindrome = (word) => word === word.split("").reverse().join("");

console.log(isPalindrome("топот"));
console.log(isPalindrome("krasivo"));
