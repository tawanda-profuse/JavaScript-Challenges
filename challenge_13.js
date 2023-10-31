// The function below iterates over an input string, then counts the repeating letters and returns a string containing the letter and the count.
function countLetters(str) {
  let [scoreArray, letters] = [new Set(), str.split("")];
  for (let i = 0; i < letters.length; i++) {
    let counter = 0;
    for (j = 0; j < letters.length; j++) {
      if (letters[j] === letters[i]) {
        counter++;
      }
    }
    scoreArray.add(`${counter}${letters[i]}`);
  }
  let output = "";
  for (let i of scoreArray) {
    output += i;
  }
  return output;
}

console.log(countLetters("ffffeerttttooo"));
console.log(countLetters("treesarecooool!"));
