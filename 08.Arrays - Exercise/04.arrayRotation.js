function arrayRotation(arr, rotations) {
  for (let i = 1; i <= rotations; i++) {
    let curNum = arr.shift();
    arr.push(curNum);
  }

  let result = arr.join(" ");
  console.log(result);
}
