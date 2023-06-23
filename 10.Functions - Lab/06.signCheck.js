function signCheck(num1, num2, num3) {
  let isPositive = true;
  if (num1 < 0 && num2 >= 0 && num3 >= 0) {
    isPositive = false;
  } else if (num1 >= 0 && num2 >= 0 && num3 < 0) {
    isPositive = false;
  } else if (num1 >= 0 && num2 < 0 && num3 >= 0) {
    isPositive = false;
  } else if (num1 < 0 && num2 < 0 && num3 < 0) {
    isPositive = false;
  }
  if (isPositive) {
    return "Positive";
  } else {
    return "Negative";
  }
}

console.log(signCheck(-6, -12, 14));
