function manOWar(input) {
  let pirateShip = input.shift().split(">").map(Number);
  let warship = input.shift().split(">").map(Number);
  let maxHealth = Number(input.shift());

  let isGameOver = false;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Retire") {
    if (isGameOver) {
      break;
    }
    let tokens = command.split(" ");
    let action = tokens[0];
    let repairsCount = 0;

    switch (action) {
      case "Fire":
        let indexEl = Number(tokens[1]);
        let damage = Number(tokens[2]);
        if (indexEl >= 0 && indexEl < warship.length) {
          if (warship[indexEl] - damage <= 0) {
            console.log("You won! The enemy ship has sunken.");
            isGameOver = true;
            break;
          }
          warship[indexEl] = warship[indexEl] - damage;
        }
        break;
      case "Defend":
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        let damageTaken = Number(tokens[3]);
        if (
          startIndex >= 0 &&
          startIndex < pirateShip.length &&
          endIndex >= 0 &&
          endIndex < pirateShip.length &&
          startIndex <= endIndex
        ) {
          for (let i = 0; i < pirateShip.length; i++) {
            if (i >= startIndex && i <= endIndex) {
              if (pirateShip[i] - damageTaken <= 0) {
                isGameOver = true;
                console.log("You lost! The pirate ship has sunken.");
                break;
              }
              pirateShip[i] = pirateShip[i] - damageTaken;
            }
          }
        }
        break;
      case "Repair":
        let indexSection = Number(tokens[1]);
        let health = Number(tokens[2]);
        if (indexSection >= 0 && indexSection < pirateShip.length) {
          pirateShip[indexSection] = pirateShip[indexSection] + health;
          if (pirateShip[indexSection] > maxHealth) {
            pirateShip[indexSection] = maxHealth;
          }
        }
        break;
      case "Status":
        let repairMargin = maxHealth * 0.2;
        pirateShip.forEach((el) => {
          if (el < repairMargin) {
            repairsCount++;
          }
        });

        console.log(repairsCount + " sections need repair.");
        break;
    }

    command = input[index];
    index++;
  }
  let pirateShipSum = 0;
  let warshipSum = 0;

  pirateShip.forEach((el) => (pirateShipSum += el));
  warship.forEach((el) => (warshipSum += el));
  if (!isGameOver) {
    console.log(
      `Pirate ship status: ${pirateShipSum}\nWarship status: ${warshipSum}`
    );
  }
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
