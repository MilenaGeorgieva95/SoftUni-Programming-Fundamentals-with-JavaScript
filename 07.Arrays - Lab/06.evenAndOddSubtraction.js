function evenAndOddSubstraction(arr) {
  let arrNums = arr.map(Number);
  let sumOdd = 0;
  let sumEven = 0;

  for (num of arrNums) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  console.log(sumEven - sumOdd);
}
