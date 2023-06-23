function sumFirstAndLast(arr) {
  //early return:
  if (arr.length === 1) {
    //array to string:
    return console.log(Number(arr.toString()));
  }

  //   let firstNum = Number(arr.shift());
  //   let lastNum = Number(arr.pop());
  //   let sum = firstNum + lastNum;

  let sum = Number(arr.shift()) + Number(arr.pop());
  console.log(sum);
}

sumFirstAndLast(["20", "30", "40"]);
