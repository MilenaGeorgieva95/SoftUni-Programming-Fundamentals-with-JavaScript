function race(input) {
  let list = input.shift().split(", ");
  let players = {};
  let pattern = /[A-Za-z]+/g;
  let patternTwo = /\d+/g;

  for (let player of list) {
    players[player] = 0;
  }

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "end of race") {
    let name = command.match(pattern).join("");
    let distanceStr = command.match(patternTwo).join("");
    let distance = 0;
    for (let digit of distanceStr) {
      distance += Number(digit);
    }
    if (players.hasOwnProperty(name)) {
      players[name] += distance;
    }
    command = input[index];
    index++;
  }

  let finalists = Object.entries(players);
  finalists.sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${finalists[0][0]}`);
  console.log(`2nd place: ${finalists[1][0]}`);
  console.log(`3rd place: ${finalists[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
