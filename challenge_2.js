// The function below returns the word "Arithmetic" if the values in the array each have the same difference e.g. [1, 2, 3, 4, 5, 6]: difference is 1. It returns the word "Geometric" if the difference between each array value is a multiple of the values, and it returns -1 if neither of the other conditions are true
const mathSequences = (arr) => {
  let arith = new Set();
  let geo = new Set();

  for (let index = 1; index < arr.length; index++) {
    let number1 = arr[index] - arr[index - 1];
    arith.add(number1);
    let number2 = arr[index] / arr[index - 1];
    geo.add(number2);
  }

  if (arith.size === 1) {
    return "Arithmetic";
  } else if (geo.size === 1) {
    return "Geometric";
  } else {
    return "-1";
  }
};

console.log(mathSequences([1, 2, 3, 4, 5, 6]));
console.log(mathSequences([2, 4, 6, 8]));
console.log(mathSequences([5, 25, 125]));
console.log(mathSequences([2, 5, 14, 89]));
