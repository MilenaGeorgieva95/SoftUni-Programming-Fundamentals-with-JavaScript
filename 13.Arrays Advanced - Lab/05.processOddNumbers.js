function processOddNumbers(arr) {
  //let oddNumsArr = arr.filter((a, i) => i % 2 !== 0);
  //let doubledArr = oddNumsArr.map((a) => a * 2);
  //let reversedArr = doubledArr.reverse();
  //console.log(reversedArr.join(" "));

  let result = arr
    .filter((el, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");

  console.log(result);
}

processOddNumbers([10, 15, 20, 25]);
