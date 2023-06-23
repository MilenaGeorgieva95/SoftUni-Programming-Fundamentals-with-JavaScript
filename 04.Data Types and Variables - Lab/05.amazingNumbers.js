function amazingNumbers(num) {
  let numStr = num.toString();
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += Number(numStr[i]);
  }
  let result = sum.toString().includes("9");
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
