function magicMatrices(matrix) {
  let resultArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      rowSum += matrix[i][j];
      colSum += matrix[j][i];
    }
    resultArr.push(colSum);
    resultArr.push(rowSum);
  }

  for (let el of resultArr) {
    if (el !== resultArr[0]) {
      return false;
    }
  }

  return true;
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
