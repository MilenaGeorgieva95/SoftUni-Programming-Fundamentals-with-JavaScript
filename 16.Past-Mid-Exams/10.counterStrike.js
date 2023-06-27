function counterStrike(input) {
  let health = Number(input.shift());

  let winsCounter = 0;
  let isGameOver = false;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "End of battle") {
    let distance = Number(command);

    if (health >= distance) {
      health -= distance;
      winsCounter++;
    } else {
      isGameOver = true;
      break;
    }
    if (winsCounter % 3 === 0) {
      health += winsCounter;
    }

    command = input[index];
    index++;
  }
  if (isGameOver) {
    console.log(
      `Not enough energy! Game ends with ${winsCounter} won battles and ${health} energy`
    );
  } else {
    console.log(`Won battles: ${winsCounter}. Energy left: ${health}`);
  }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
