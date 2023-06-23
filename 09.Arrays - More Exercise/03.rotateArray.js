function rotateArray(arr) {
  let rotations = Number(arr.pop());

  for (let i = 0; i < rotations; i++) {
    let curEl = arr.pop();
    arr.unshift(curEl);
  }
  console.log(arr.join(" "));
}

rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
