function plantDiscovery(input) {
  let plantsCount = Number(input.shift());
  let result = {};

  for (let i = 0; i < plantsCount; i++) {
    let details = input.shift();
    let [plant, rarity] = details.split("<->");
    rarity = Number(rarity);
    result[plant] = [rarity, []];
  }

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Exhibition") {
    let curEl = command.split(": ");
    let action = curEl[0];
    let plant = curEl[1].split(" - ");
    let name = plant[0];
    if (result.hasOwnProperty(name)) {
      switch (action) {
        case "Rate":
          rating = Number(plant[1]);
          result[name][1].push(rating);
          break;
        case "Update":
          rarity = Number(plant[1]);
          result[name][0] = rarity;
          break;
        case "Reset":
          result[name][1] = [];
          break;
      }
    } else {
      console.log("error");
    }

    command = input[index];
    index++;
  }

  for (let key in result) {
    let ratings = result[key][1];
    let sumRatings = 0;
    let averageRating = 0;
    ratings.forEach((el) => {
      sumRatings += el;
    });
    if (ratings.length > 0) {
      averageRating = sumRatings / ratings.length;
    }

    result[key][1] = averageRating;
  }
  let arr = Object.entries(result);
  console.log("Plants for the exhibition:");
  for (let el of arr) {
    console.log(
      `- ${el[0]}; Rarity: ${el[1][0]}; Rating: ${el[1][1].toFixed(2)}`
    );
  }
}

plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
