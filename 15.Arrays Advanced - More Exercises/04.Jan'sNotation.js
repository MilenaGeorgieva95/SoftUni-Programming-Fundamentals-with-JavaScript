function jansNotation(arr) {
  let resultArr = [];
  let isEnded = false;

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    if (typeof command === "number") {
      resultArr.push(command);
      continue;
    }
    if (resultArr.length < 2) {
      console.log("Error: not enough operands!");
      isEnded = true;
      break;
    }
    let sum = 0;
    let lastNum = resultArr[resultArr.length - 1];
    let lastNumTwo = resultArr[resultArr.length - 2];
    switch (command) {
      case "+":
        sum = lastNum + lastNumTwo;
        break;
      case "-":
        sum = lastNumTwo - lastNum;
        break;
      case "*":
        sum = lastNum * lastNumTwo;
        break;
      case "/":
        sum = lastNumTwo / lastNum;
        break;
    }
    resultArr.splice(-2, 2, sum);
  }
  if (!isEnded) {
    if (resultArr.length === 1) {
      console.log(resultArr[0]);
    } else {
      console.log("Error: too many operands!");
    }
  }
}

jansNotation([5, 3, 4, "*", "-"]);
