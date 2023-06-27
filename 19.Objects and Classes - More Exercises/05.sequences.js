function sequences(input) {
  let sortedArr = [];
  
  for (let line of input) {
    arr = JSON.parse(line);
    arr.sort((a, b) => b - a);
    sortedArr.push(arr);
  }
  sortedArr.sort((a, b) => a.length - b.length);

  for (let row = 0; row < sortedArr.length; row++) {
    for (let row2 = row + 1; row2 < sortedArr.length; row2++) {
      let matches = true;
      for (let col = 0; col < sortedArr[row].length; col++) {
        if (sortedArr[row][col] !== sortedArr[row2][col]) {
          matches = false;
          break;
        }
      }
      if (matches) {
        sortedArr.splice(row2, 1);
        matches = true;
        row2--;
      }
    }
  }
  for (let line of sortedArr) {
    console.log("[" + line.join(", ") + "]");
  }
}
sequences([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
