// The function below returns true if the input string has no duplicate characters and false if it does.
function unique(str) {
  let distinctItems = new Set();

  for (word of str) {
    if (distinctItems.has(word)) {
      return false;
    }
    distinctItems.add(word);
  }
  return true;

//   return new Set(str).size === str.length // one line solution;
}

console.log(unique("abcd"));
console.log(unique("abcdade"));
