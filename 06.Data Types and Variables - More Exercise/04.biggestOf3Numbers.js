function biggestNum(firstNum, seconNum, thirdNum) {
  let arr = [];
  arr.push(firstNum, seconNum, thirdNum);
  let sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr[0]);
}

biggestNum(1, 2, 3);
