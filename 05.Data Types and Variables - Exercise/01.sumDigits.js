function numDigits(n) {
  let nToString = String(n);
  let sum = 0;

  for (let i = 0; i < nToString.length; i++) {
    let curNum = Number(nToString[i]);
    sum += curNum;
  }
  console.log(sum);
}
