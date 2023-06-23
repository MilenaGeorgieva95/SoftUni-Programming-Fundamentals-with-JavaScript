function addAndSubstract(arr) {
  let sumOldArray = 0;
  let sumNewArray = 0;
  let arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    let curNum = arr[i];
    sumOldArray += curNum;
    if (curNum % 2 === 0) {
      arr[i] = arr[i] + i;
    } else {
      arr[i] = arr[i] - i;
    }
    sumNewArray += arr[i];
  }

  console.log(arr);
  console.log(sumOldArray);
  console.log(sumNewArray);
}
