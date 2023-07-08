function treasureFinder(input) {
  let keysArr = input[0].split(" ").map(Number);
  let index = 1;
  let command = input[index];
  index++;

  let treasures = [];

  while (command !== "find") {
    let result = "";
    let i = 0;
    for (let char of command) {
      let charCode = char.charCodeAt(0);
      let code = Number(charCode) - keysArr[i];
      let newChar = String.fromCharCode(code);
      result += newChar;
      i++;
      if (i === keysArr.length) {
        i = 0;
      }
    }
    treasures.push(result);

    command = input[index];
    index++;
  }

  for (let treasure of treasures) {
    let detailsStart = treasure.indexOf("&") + 1;
    let detailsEnd = treasure.lastIndexOf("&");
    let treasureType = treasure.substring(detailsStart, detailsEnd);

    let coordinatesStart = treasure.indexOf("<") + 1;
    let coordinatesEnd = treasure.indexOf(">");
    let coordinates = treasure.substring(coordinatesStart, coordinatesEnd);
    console.log(`Found ${treasureType} at ${coordinates}`);
  }
}

treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
