function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let isSpecial = false;
    let numStr = i.toString();
    for (let j = 0; j < numStr.length; j++) {
      sum += Number(numStr[j]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(i + " -> True");
    } else {
      console.log(i + " -> False");
    }
  }
}
specialNumbers(15);
