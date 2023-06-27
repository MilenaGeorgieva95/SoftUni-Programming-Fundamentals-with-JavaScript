function rosettaStone(inputArr) {
  let stoneLetter = (num) => {
    num = num % 27;
    return num === 0 ? " " : String.fromCharCode(num + 64);
  };

  let decoder = [];
  let decoderY = Number(inputArr.shift());
  for (let i = 0; i < decoderY; i++) {
    let decoderEl = inputArr.shift();
    decoder.push(decoderEl.split(" ").map(Number));
  }
  let decoderX = decoder[0].length;
  let matrix = inputArr.map((el) => el.split(" ").map(Number));

  for (let matrixRow = 0; matrixRow < matrix.length; matrixRow += decoderY) {
    for (
      let matrixCol = 0;
      matrixCol < matrix[matrixRow].length;
      matrixCol += decoderX
    ) {
      for (let tempRow = 0; tempRow < decoderY; tempRow++) {
        for (let tempCol = 0; tempCol < decoderX; tempCol++) {
          let currentRow = matrixRow + tempRow;
          let currentCol = matrixCol + tempCol;

          if (
            currentRow >= 0 &&
            currentRow < matrix.length &&
            currentCol >= 0 &&
            currentCol < matrix[currentRow].length
          ) {
            let sum =
              decoder[tempRow][tempCol] + matrix[currentRow][currentCol];
            matrix[currentRow][currentCol] = stoneLetter(sum);
          }
        }
      }
    }
  }

  console.log(matrix.flat().join(""));
}

rosettaStone([
  "1",
  "1 3 13",
  "12 22 14 13 25 0 4 24 23",
  "18 24 2 25 22 0 0 11 18",
  "8 25 6 26 8 23 13 4 14",
  "14 3 14 10 6 1 6 16 14",
  "11 12 2 10 24 2 13 24 0",
  "24 24 10 14 15 25 18 24 12",
  "4 24 0 8 4 22 19 22 14",
  "0 11 18 26 1 19 18 13 15",
  "8 15 14 26 24 14 26 24 14",
]);
