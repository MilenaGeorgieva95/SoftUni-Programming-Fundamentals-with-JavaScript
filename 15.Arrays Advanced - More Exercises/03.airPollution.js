function airPolution(mapArr, forceArr) {
  mapArr = mapArr.map((el) => el.split(" ").map(Number));
  let result = [];

  for (let i = 0; i < forceArr.length; i++) {
    let tokens = forceArr[i].split(" ");
    let force = tokens[0];
    let value = Number(tokens[1]);

    switch (force) {
      case "breeze":
        for (let j = 0; j < 5; j++) {
          mapArr[value][j] = mapArr[value][j] - 15;
          if (mapArr[value][j] < 0) {
            mapArr[value][j] = 0;
          }
        }
        break;

      case "gale":
        for (let i = 0; i < 5; i++) {
          mapArr[i][value] = mapArr[i][value] - 20;
          if (mapArr[i][value] < 0) {
            mapArr[i][value] = 0;
          }
        }
        break;
      case "smog":
        for (let k = 0; k < 5; k++) {
          for (let l = 0; l < 5; l++) {
            mapArr[k][l] = mapArr[k][l] + value;
          }
        }
        break;
    }
  }

  for (let k = 0; k < 5; k++) {
    for (let l = 0; l < 5; l++) {
      if (mapArr[k][l] >= 50) {
        let newEl = "[" + k + "-" + l + "]";
        result.push(newEl);
      }
    }
  }

  if (result.length > 0) {
    console.log(`Polluted areas: ${result.join(", ")}`);
  } else {
    console.log("No polluted areas");
  }
}

airPolution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
