function numberModification(nums) {
  let numsStr = nums.toString();
  let numsArr = numsStr.split("");
  let sum = 0;
  let digitsCounter = 0;
  let average = 0;

  while (average <= 5) {
    for (let numStr of numsArr) {
      let num = Number(numStr);
      sum += num;
      digitsCounter++;
    }
    average = sum / digitsCounter;
    if (average <= 5) {
      digitsCounter = 0;
      sum = 0;
      numsArr.push("9");
    }
  }
  let resultNum = Number(numsArr.join(""));
  console.log(resultNum);
}

numberModification(101);
