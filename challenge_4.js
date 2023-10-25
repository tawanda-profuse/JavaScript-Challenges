// The function below returns a string with the first letter of each word capitalized
function capitalizeWords(str) {
  let words = str.split(" ").map((word) => {
    let firstLetter = word.slice(0, 1); // first character only
    let rest = word.slice(1); // all characters after first character
    firstLetter = firstLetter.toUpperCase();
    return `${firstLetter}${rest}`;
  });

  return words.join(" ");
}

console.log(capitalizeWords("I got up early this morning"));
console.log(
  capitalizeWords("The quick, Big, brown fox jumped over the lazy dog.")
);
