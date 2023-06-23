function condensedArrayToNumbers(arr) {
  let numsArr = arr.map(Number);
  let condensedArr = [];

  while (numsArr.length > 1) {
    for (let i = 0; i < numsArr.length - 1; i++) {
      let curSum = numsArr[i] + numsArr[i + 1];
      condensedArr.push(curSum);
    }
    numsArr = condensedArr;
    condensedArr = [];
  }
  console.log(numsArr.toString());
}

condensedArrayToNumbers([2, 10, 3]);
