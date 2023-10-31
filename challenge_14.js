// The function below returns "true" if a string is spelt the same way backwards as it is forwards.
function checkPalindrome(str) {
  let [backwards, forwards, check1, check2] = [[], [], "", ""]; // Destructured assignment
  for (let index = str.length - 1; index >= 0; index--) {
    backwards.push(str[index]);
    if (str[index] != " " && str[index] != "-" && str[index] != ",") {
      check1 += str[index];
    }
  }
  for (let index = 0; index < str.length; index++) {
    forwards.push(str[index]);
    if (str[index] != " " && str[index] != "-" && str[index] != ",") {
      check2 += str[index];
    }
  }
  return check1.toLowerCase() === check2.toLowerCase();
}

console.log(checkPalindrome("Was it a car or a cat I saw")); // true
console.log(checkPalindrome("I got up early this morning")); // false
console.log(checkPalindrome("poop")); // true
console.log(checkPalindrome("car")); // false
console.log(checkPalindrome("Red -rum-, sir,-is-murder")); // true
