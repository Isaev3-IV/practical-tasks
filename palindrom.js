function polindrom(str) {
  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
    if (str[i] !== str[j]) {
      return "It's not polindrom";
    }
  }
  return true;
}

console.log(polindrom("101"));
console.log(polindrom("топот"));
console.log(polindrom("топотор"));
