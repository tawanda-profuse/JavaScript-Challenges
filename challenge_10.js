// The function below returns the second value from the input array depending on the size of the array:
function secondValue(arr) {
  arr.sort((a, b) => a - b);

  switch (arr.length) {
    case 1:
      return `${arr[0]}`;
      break;
    case 2:
      return `${arr[0]} ${arr[1]}`;
      break;
    case 3:
      return `${arr[1]}`;
      break;
    default:
      return `${arr[1]} ${arr[arr.length - 2]}`;
      break;
  }
}

console.log(secondValue([1])); // 1
console.log(secondValue([4, 2])); // 2 4
console.log(secondValue([11, 44, 22])); // 11, 22, 44 === 22
console.log(secondValue([-11, 2, 3, 67, 7, 67, 88])); // -11, 2, 3, 7, 67, 88 === 2, 67
console.log(secondValue([25, 30, 35, 40, 45, -11, 4, 6, 14, 67, 88])); // -11, 2, 3, 7, 67, 88 === 2, 67
