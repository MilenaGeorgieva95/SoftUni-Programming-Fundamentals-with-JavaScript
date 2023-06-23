function oddAndEvenSum(num) {
  //make the number to string to iterate on it
  let numsArrey = num.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < numsArrey.length; i++) {
    let curNum = Number(numsArrey[i]);
    if (curNum % 2 === 0) {
      evenSum += curNum;
    } else {
      oddSum += curNum;
    }
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
