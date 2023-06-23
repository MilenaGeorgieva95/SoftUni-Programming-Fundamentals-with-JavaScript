function tseamAccount(arr) {
  let gameList = arr.shift().split(" ");
  let index = 0;
  let command = arr[index];
  index++;

  while (command !== "Play!") {
    let tokens = command.split(" ");
    let action = tokens[0];
    let game = tokens[1];
    let indexEl = gameList.indexOf(game);
    switch (action) {
      case "Install":
        if (gameList.indexOf(game) === -1) {
          gameList.push(game);
        }
        break;
      case "Uninstall":
        if (indexEl !== -1) {
          gameList.splice(indexEl, 1);
        }
        break;
      case "Update":
        if (indexEl !== -1) {
          let updatedGame = gameList.splice(indexEl, 1);
          gameList.push(updatedGame);
        }
        break;
      case "Expansion":
        let expand = game.split("-");
        let expandedGame = expand[0];
        let expansion = expandedGame + ":" + expand[1];
        let indexExp = gameList.indexOf(expandedGame);
        if (indexExp !== -1) {
          gameList.splice(indexExp + 1, 0, expansion);
        }
        break;
    }
    command = arr[index];
    index++;
  }
  console.log(gameList.join(" "));
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
