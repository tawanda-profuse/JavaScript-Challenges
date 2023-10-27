// The function below returns the word in the input string with the highest occurrences of a specific character
function countLetters(str) {
  let tempArr = str.split(" ");
  tempArr = tempArr.map((item) => {
    let tempItem = item.toLowerCase().split("");
    return tempItem.reduce(
      (acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        if (acc[curr] > acc.max) {
          acc.max = acc[curr];
        }
        return acc;
      },
      { max: 1, word: item }
    );
  });

  let amount = 1;
  let word = "";
  for (let item of tempArr) {
    if (item.max > amount) {
      amount = item.max;
      word = item.word;
    }
  }
  if (amount > 1) {
    return word;
  }
  return -1;
}

console.log(countLetters("JavaScript is the greatest programming language."));
console.log(countLetters("The quick big brown fox jumped over the lazyy dog."));
console.log(countLetters("Tawanda"));
