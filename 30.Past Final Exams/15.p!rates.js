function pirates(input) {
  let cityMap = {};
  let index = 0;
  let line = input[index];
  index++;

  while (line !== "Sail") {
    let tokens = line.split("||");
    if (cityMap.hasOwnProperty(tokens[0])) {
      cityMap[tokens[0]][0] += Number(tokens[1]);
      cityMap[tokens[0]][1] += Number(tokens[2]);
    } else {
      cityMap[tokens[0]] = [Number(tokens[1]), Number(tokens[2])];
    }
    line = input[index];
    index++;
  }

  line = input[index];
  index++;

  while (line !== "End") {
    let tokens = line.split("=>");
    switch (tokens[0]) {
      case "Plunder":
        let people = Number(tokens[2]);
        let gold = Number(tokens[3]);
        cityMap[tokens[1]][0] -= people;
        cityMap[tokens[1]][1] -= gold;
        console.log(
          `${tokens[1]} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
        if (cityMap[tokens[1]][0] <= 0 || cityMap[tokens[1]][1] <= 0) {
          delete cityMap[tokens[1]];
          console.log(`${tokens[1]} has been wiped off the map!`);
        }
        break;
      case "Prosper":
        let goldInc = Number(tokens[2]);
        if (goldInc >= 0) {
          cityMap[tokens[1]][1] += goldInc;
          console.log(
            `${goldInc} gold added to the city treasury. ${tokens[1]} now has ${
              cityMap[tokens[1]][1]
            } gold.`
          );
        } else {
          console.log("Gold added cannot be a negative number!");
        }
        break;
    }

    line = input[index];
    index++;
  }

  let cityArr = Object.keys(cityMap);
  let cityCount = cityArr.length;
  if (cityCount > 0) {
    console.log(
      `Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`
    );
    for (let city of cityArr) {
      console.log(
        `${city} -> Population: ${cityMap[city][0]} citizens, Gold: ${cityMap[city][1]} kg`
      );
    }
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);

console.log("*******************");

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
