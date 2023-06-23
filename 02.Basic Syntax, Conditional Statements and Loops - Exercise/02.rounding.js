function rounding(number, precision) {
  if (precision > 15) {
    precision = 15;
  }
  let myNum = number.toFixed(precision);
  let endNum = parseFloat(myNum);
  console.log(endNum);
}
