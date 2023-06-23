function ladybugs(arr) {
  let fieldSize = arr[0];
  let field = [];
  for (let i = 0; i < fieldSize; i++) {
    field.push(0);
  }
  let collectionInitialPositions = arr[1].split(" ");

  for (let i = 0; i < collectionInitialPositions.length; i++) {
    let position = Number(collectionInitialPositions[i]);
    if (position >= 0 && position < field.length) {
      field[position] = 1;
    }
  }

  for (let i = 2; i < arr.length; i++) {
    let command = arr[i].split(" ");
    let currPosition = Number(command[0]);
    let direction = command[1];
    let jumps = Number(command[2]);

    if (direction === "left") {
      if (field[currPosition] === 1) {
        field[currPosition] = 0;
        currPosition -= jumps;

        while (field[currPosition] === 1) {
          currPosition -= jumps;

          if (currPosition < 0) {
            break;
          }
        }
        if (currPosition >= 0) {
          field[currPosition] = 1;
        }
      }
    } else {
      if (field[currPosition] === 1) {
        field[currPosition] = 0;
        currPosition += jumps;

        while (field[currPosition] === 1) {
          currPosition += jumps;

          if (currPosition > field.length) {
            break;
          }
        }
        if (currPosition < field.length) {
          field[currPosition] = 1;
        }
      }
    }
  }
  console.log(field.join(" "));
}
