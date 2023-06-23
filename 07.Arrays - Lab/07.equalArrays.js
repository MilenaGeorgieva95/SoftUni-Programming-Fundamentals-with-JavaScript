function equalArrays(arrOne, arrTwo) {
  let areIdentical = true;
  let sum = 0;
  let index = 0;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      if (areIdentical === true) {
        index = i;
      }
      areIdentical = false;
    }
    sum += Number(arrOne[i]);
  }
  if (areIdentical) {
    console.log("Arrays are identical. Sum: " + sum);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}
