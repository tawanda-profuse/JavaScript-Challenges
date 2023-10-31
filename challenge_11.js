// The function below returns the item that occurs the most times in an array.
function testRepeat(arr) {
  let [score, scoreArray] = [new Set(), []];
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        counter++;
      }
    }
    score.add(counter);
    scoreArray.push(counter);
  }
  let [maximum, location] = [Math.max(...scoreArray), 0];
  for (let i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i] === maximum) {
      location = i;
      break;
    }
  }
  return Math.max(...score) === 1 ? -1 : arr[location];
}

console.log(testRepeat([5, 2, 2, 1, 5])); // return 5
console.log(testRepeat([6, 5, 5, 10, 10, 10])); // return 10
console.log(testRepeat([3, 4, 1, 6, 10])); // return -1
console.log(testRepeat([1, 1, 1, 1, 2, 3, 4, 4, 4, 4])); // return 1
console.log(testRepeat(["a", "b", "c", "d", "d", "d", "x", "x", "x", "x"])); // return x
