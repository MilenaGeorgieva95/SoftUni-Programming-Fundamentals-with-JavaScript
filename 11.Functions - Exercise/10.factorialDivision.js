function recursion(a, b) {
  function factorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  let firstNum = factorial(a);
  let secondNum = factorial(b);
  let result = firstNum / secondNum;
  console.log(result.toFixed(2));
}
