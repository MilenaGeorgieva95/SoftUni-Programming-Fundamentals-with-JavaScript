function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let elOne = arr[i];
    let elTwo = arr[arr.length - 1 - i];
    arr[i] = elTwo;
    arr[arr.length - 1 - i] = elOne;
  }
  console.log(arr.join(" "));
}

reverseInPlace(["a", "b", "c", "d", "e"]);
