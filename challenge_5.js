// The function below returns true if a string does not contain duplicate values and false otherwise
function unique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}

console.log(unique("abcde"));
console.log(unique("abacdefb"));
