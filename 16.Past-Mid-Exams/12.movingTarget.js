function movingTarget(input) {
  let board = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "End") {
    command = command.split(" ");
    let action = command[0];
    let indexEl = Number(command[1]);
    let value = Number(command[2]);

    switch (action) {
      case "Shoot":
        if (indexEl >= 0 && indexEl < board.length) {
          board[indexEl] -= value;
          if (board[indexEl] <= 0) {
            board.splice(indexEl, 1);
          }
        }
        break;
      case "Add":
        if (board[indexEl]) {
          board.splice(indexEl, 0, value);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        let startIndex = indexEl - value;
        let endIndex = indexEl + value;
        let countToRemove = value * 2 + 1;
        if (startIndex >= 0 && endIndex < board.length) {
          board.splice(startIndex, countToRemove);
        } else {
          console.log("Strike missed!");
        }
        break;
    }
    command = input[index];
    index++;
  }

  console.log(board.join("|"));
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
