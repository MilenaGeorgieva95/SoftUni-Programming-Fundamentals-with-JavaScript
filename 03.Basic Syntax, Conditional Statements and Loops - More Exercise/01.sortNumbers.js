function sortNumbers(numOne, numTwo, numThree) {
  let arr = [];
  arr.push(numOne, numTwo, numThree);
  sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr.join("\n"));
}

sortNumbers(1, 2, 3);
