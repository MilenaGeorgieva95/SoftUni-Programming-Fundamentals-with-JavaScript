function diagonalAttack(input) {
  let matrix = input.map((el) => el.split(" ").map(Number));

  let diagonalOneSum = 0;
  let diagonalTwoSum = 0;
  let index = 0;
  let indexTwo = matrix[0].length - 1;
  let diagonalIndexes = [];

  for (let i = 0; i < matrix.length; i++) {
    diagonalIndexes.push([index, indexTwo]);
    let curEl = matrix[i][index];
    diagonalOneSum += curEl;
    index++;
    let curElTwo = matrix[i][indexTwo];
    diagonalTwoSum += curElTwo;
    indexTwo--;
  }

  if (diagonalOneSum === diagonalTwoSum) {
    for (let j = 0; j < matrix.length; j++) {
      for (let k = 0; k < matrix[j].length; k++) {
        if (k === diagonalIndexes[j][0] || k === diagonalIndexes[j][1]) {
          continue;
        }
        matrix[j][k] = diagonalOneSum;
      }
      console.log(matrix[j].join(" "));
    }
  }
}

diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
