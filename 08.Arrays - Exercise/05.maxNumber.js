function maxNum(arr) {
  let buff = "";

  for (let i = 0; i < arr.length; i++) {
    let curNum = Number(arr[i]);
    let isMax = true;

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = Number(arr[j]);
      if (curNum <= nextNum) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      buff += curNum + " ";
    }
  }
  console.log(buff);
}
