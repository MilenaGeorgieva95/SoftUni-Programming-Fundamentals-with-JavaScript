function equalSum(arr) {
  let isEqualSum = false;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j < i) {
        sumLeft += arr[j];
      } else if (j > i) {
        sumRight += arr[j];
      }
    }

    if (sumLeft === sumRight) {
      isEqualSum = true;
      result.push(i);
    }
  }

  if (isEqualSum) {
    console.log(result.join(" "));
  } else {
    console.log("no");
  }
}
