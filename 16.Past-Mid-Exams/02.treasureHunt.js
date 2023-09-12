function treasureHunt(input) {
  let chest = input.shift().split("|");

  let index = 0;
  let command = input[index];
  index++;
  let lengths = 0;
  let finalLength = 0;

  while (command !== "Yohoho!") {
    let tokens = command.split(" ");
    let action = tokens.shift();

    switch (action) {
      case "Loot":
        for (let el of tokens) {
          if (chest.indexOf(el) === -1) {
            chest.unshift(el);
          }
        }
        break;
      case "Drop":
        let indexEl = Number(tokens[0]);
        if (indexEl >= 0 && indexEl < chest.length) {
          let item = chest.splice(indexEl, 1).toString();
          chest.push(item);
        }
        break;
      case "Steal":
        let steals = Number(tokens[0]);
        console.log(chest.splice(-steals).join(", "));
        break;
    }

    command = input[index];
    index++;
  }
  if (chest.length === 0) {
    console.log("Failed treasure hunt.");
  } else {
    chest.forEach((el) => (lengths += el.length));
    chest.forEach((el) => finalLength++);
    console.log(
      `Average treasure gain: ${(lengths / finalLength).toFixed(
        2
      )} pirate credits.`
    );
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
