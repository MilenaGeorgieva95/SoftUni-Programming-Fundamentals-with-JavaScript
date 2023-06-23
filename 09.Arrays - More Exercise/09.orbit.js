function orbit(input) {
  let widthRows = input[0];
  let heigthCols = input[1];
  let starRow = input[2];
  let starCol = input[3];

  let matrix = [];
  for (let i = 0; i < widthRows; i++) {
    matrix.push([]);
  }

  for (let row = 0; row < widthRows; row++) {
    for (let col = 0; col < heigthCols; col++) {
      matrix[row][col] =
        Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
    }
  }

  console.log(matrix.map((row) => row.join(" ")).join("\n"));
}

orbit([4, 4, 1, 1]);
