function mergeArrays(arr1, arr2) {
  let arrLength = arr1.length;
  let newArray = [];

  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0) {
      let currNum = Number(arr1[i]) + Number(arr2[i]);
      newArray.push(currNum);
    } else {
      currNum = "" + arr1[i] + arr2[i];
      newArray.push(currNum);
    }
  }
  let result = newArray.join(" - ");

  console.log(result);
}
