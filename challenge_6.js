// The function below returns true if the sum of the array elements equals the largest item in the array
function sumVsArray(arr) {
  let largestNum = Math.max(...arr);
  arr.splice(arr.indexOf(largestNum), 1);
  let sum = arr.reduce((prev, curr) => prev + curr);
  return sum === largestNum;
}

console.log(sumVsArray([1, 2, 4, 6, 13]));
console.log(sumVsArray([1, 2, 4, 34, 22]));
