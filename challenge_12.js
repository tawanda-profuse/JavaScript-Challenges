// The function below returns "true" if the input number is a prime number, and false if it is not.
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(8)); // false
console.log(isPrime(11)); // true
console.log(isPrime(121)); // false
console.log(isPrime(127)); // true
