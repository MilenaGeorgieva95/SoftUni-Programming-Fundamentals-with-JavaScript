function sumEvenNumbers(arr) {
  let arrNums = arr.map(Number);
  let sumEven = 0;
  for (num of arrNums) {
    if (num % 2 === 0) {
      sumEven += num;
    }
  }
  console.log(sumEven);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
