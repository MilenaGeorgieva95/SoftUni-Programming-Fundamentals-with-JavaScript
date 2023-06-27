function heartDelivery(input) {
  let houses = input
    .shift()
    .split("@")
    .map((el) => Number(el));

  let index = 0;
  let command = input[index];
  index++;

  let houseIndex = 0;
  let visitedHouses = [];

  while (command !== "Love!") {
    let tokens = command.split(" ");
    let jumps = Number(tokens[1]);

    houseIndex += jumps;

    if (houseIndex > houses.length - 1) {
      houseIndex = 0;
    }

    houses[houseIndex] -= 2;

    if (houses[houseIndex] <= 0) {
      if (visitedHouses.includes(houseIndex)) {
        console.log(`Place ${houseIndex} already had Valentine's day.`);
      } else {
        console.log(`Place ${houseIndex} has Valentine's day.`);
        visitedHouses.push(houseIndex);
      }
    }
    command = input[index];
    index++;
  }

  console.log(`Cupid's last position was ${houseIndex}.`);
  let counterFailed = houses.filter((el) => el > 0);
  let failed = counterFailed.length;
  if (failed > 0) {
    console.log(`Cupid has failed ${failed} places.`);
  } else console.log("Mission was successful.");
}

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
