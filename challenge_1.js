// The function below returns the first instance of the longest word
function longestWord(str) {
  let words = str.split(" ");
  let longest = [];

  for (let a = 0; a < words.length; a++) {
    longest.push(words[a].length);
  }

  return words[longest.indexOf(Math.max(...longest))];
}

// Testing:
console.log(longestWord("The quick big brown jumped over the lazy dog.")); // Should return "jumped"
console.log(longestWord("I went straight to the beach!")); // Should return "straight"
console.log(longestWord("I woke up early today")); // Should return "early"
