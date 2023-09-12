function one(input) {
  let days = Number(input.shift());
  let playersCount = Number(input.shift());
  let energy = Number(input.shift());
  let waterperDayPerPerson = Number(input.shift());
  let totalWater = waterperDayPerPerson * days * playersCount;
  let foodperDayPerPerson = Number(input.shift());
  let totalFood = foodperDayPerPerson * days * playersCount;

  input = input.map(Number);
  let daysCount = 0;
  let isEnergyOver = false;

  for (let i = 0; i < input.length; i++) {
    daysCount++;

    let curEnergyLost = input[i];
    energy -= curEnergyLost;
    if (energy <= 0) {
      isEnergyOver = true;
      break;
    }
    if (daysCount % 2 === 0) {
      energy += energy * 0.05;
      totalWater -= totalWater * 0.3;
    }
    if (daysCount % 3 === 0) {
      energy += energy * 0.1;
      totalFood -= totalFood / playersCount;
    }
  }

  if (isEnergyOver) {
    console.log(
      `You will run out of energy. You will be left with ${totalFood.toFixed(
        2
      )} food and ${totalWater.toFixed(2)} water.`
    );
  } else {
    console.log(
      `You are ready for the quest. You will be left with - ${energy.toFixed(
        2
      )} energy!`
    );
  }
}

one([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
