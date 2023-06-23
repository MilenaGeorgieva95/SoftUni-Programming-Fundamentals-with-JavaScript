function printNthElement(arr) {
  let step = Number(arr.pop());
  let resultArr = [];

  for (let i = 0; i < arr.length; i += step) {
    resultArr.push(arr[i]);
  }
  console.log(resultArr.join(" "));
}

printNthElement(["5", "20", "31", "4", "20", "2"]);
