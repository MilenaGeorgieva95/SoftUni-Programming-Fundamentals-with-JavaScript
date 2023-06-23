function simpleCalculator(num1, num2, operator) {
  let operatorsObj = {
    multiply: num1 * num2,
    divide: num1 / num2,
    add: num1 + num2,
    subtract: num1 - num2,
  };

  return operatorsObj[operator];
}

console.log(simpleCalculator(5, 5, "multiply"));
