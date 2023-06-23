function sorting(input) {
  let sortedArr = input.sort((a, b) => b - a);
  let length = sortedArr.length;
  let resultArr = [];

  for (let i = 0; i < length; i++) {
    let currNum = sortedArr.shift();
    let lastNum = sortedArr.pop();

    resultArr.push(currNum);
    resultArr.push(lastNum);
  }
  console.log(resultArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
