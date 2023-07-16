function starEnigma(input) {
  let messagesCount = Number(input.shift());
  let result = [];

  let keyPattern = /[star]/gi;

  let pattern =
    /@(?<planet>[A-Za-z]+)[^@!:>-]*:(?<population>\d+)[^@!:>-]*!(?<attack>[AD])![^@!:>-]*->(?<soldiers>\d+)/g;

  for (let i = 0; i < messagesCount; i++) {
    let curEl = input[i];
    let keyMatches = curEl.match(keyPattern);
    let key = 0;
    if (keyMatches) {
      key = keyMatches.length;
    }
    let newLine = "";
    for (let j = 0; j < curEl.length; j++) {
      let code = curEl[j].charCodeAt(0);
      let newCharCode = code - key;
      let newChar = String.fromCharCode(newCharCode);
      newLine += newChar;
    }
    result.push(newLine);
  }

  let attackedPlanets = [];
  let attackedCount = 0;
  let destroyedPlanets = [];
  let destroyedCount = 0;

  for (let line of result) {
    let matches = line.matchAll(pattern);
    for (let match of matches) {
      let planet = match.groups.planet;
      let population = match.groups.population;
      let attack = match.groups.attack;
      let soldiers = match.groups.soldiers;
      if (planet && population && attack && soldiers) {
        switch (attack) {
          case "A":
            attackedPlanets.push(planet);
            attackedCount++;
            break;
          case "D":
            destroyedPlanets.push(planet);
            destroyedCount++;
            break;
        }
      }
    }
  }

  console.log(`Attacked planets: ` + attackedCount);
  attackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
  attackedPlanets.forEach((el) => console.log(`-> ${el}`));

  console.log(`Destroyed planets: ` + destroyedCount);
  destroyedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.forEach((el) => console.log(`-> ${el}`));
}

starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
