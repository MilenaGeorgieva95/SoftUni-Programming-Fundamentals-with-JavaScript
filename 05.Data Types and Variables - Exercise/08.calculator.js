function calculator(a, operator, b) {
  let output = 0;
  switch (operator) {
    case "+":
      output = a + b;
      break;
    case "-":
      output = a - b;
      break;
    case "/":
      output = a / b;
      break;
    case "*":
      output = a * b;
      break;
  }

  console.log(output.toFixed(2));
}
