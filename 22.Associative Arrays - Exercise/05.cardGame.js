function cardGame(input) {
  let obj = {};
  for (let line of input) {
    let [player, cards] = line.split(": ");
    if (obj.hasOwnProperty(player)) {
      obj[player] = obj[player].concat(", ", cards);
    } else {
      obj[player] = cards;
    }
  }
  for (let person in obj) {
    let set = new Set(obj[person].split(", "));
    let sumSet = 0;
    for (let card of set) {
      let first = 0;
      switch (card[0]) {
        case "1":
          if (card[1] === "0") {
            first = 10;
          } else {
            first = 1;
          }
          break;
        case "J":
          first = 11;
          break;
        case "Q":
          first = 12;
          break;
        case "K":
          first = 13;
          break;
        case "A":
          first = 14;
          break;
        default:
          first = Number(card[0]);
          break;
      }
      let second = 0;
      switch (card[card.length - 1]) {
        case "S":
          second = 4;
          break;
        case "H":
          second = 3;
          break;
        case "D":
          second = 2;
          break;
        case "C":
          second = 1;
          break;
      }
      let cardValue = first * second;
      sumSet += cardValue;
    }

    obj[person] = sumSet;
  }
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
