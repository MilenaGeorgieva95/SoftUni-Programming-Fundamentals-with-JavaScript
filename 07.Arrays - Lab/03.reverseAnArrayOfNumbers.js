function reverseArray(num, arr) {
  let selection = arr.slice(0, num);
  let reversedSelection = selection.reverse().join(" ");
  console.log(reversedSelection);
}
reverseArray(3, [10, 20, 30, 40, 50]);
