function smallestTwoNumbers(arr) {
  arr.sort((a, b) => a - b);
  let smallestTwoNums = arr.slice(0, 2).join(" ");
  return smallestTwoNums;
}

smallestTwoNumbers([30, 15, 50, 5]);
