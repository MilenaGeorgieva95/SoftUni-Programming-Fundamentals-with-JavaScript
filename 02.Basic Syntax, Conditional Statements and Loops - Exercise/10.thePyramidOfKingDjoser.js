function pyramid(baseSide, inc) {
  let totalStone = 0;
  let totalMarble = 0;
  let totalGold = 0;
  let totalLapis = 0;

  for (
    let baseStoneSide = baseSide - 2;
    baseStoneSide >= 1;
    baseStoneSide -= 2
  ) {
    let step = baseStoneSide * baseStoneSide * inc;
    totalStone += step;
  }
  console.log("Stone required: " + Math.ceil(totalStone));
  let counter = 0;

  for (let side = baseSide; side >= 1; side -= 2) {
    counter++;
    let param = (side * 4 - 4) * inc;
    if (side < 3) {
      totalGold += side * side * inc;
    } else if (counter % 5 === 0) {
      totalLapis += param;
    } else {
      totalMarble += param;
    }
  }
  let totalHeight = Math.floor(counter * inc);
  console.log("Marble required: " + Math.ceil(totalMarble));
  console.log("Lapis Lazuli required: " + Math.ceil(totalLapis));
  console.log("Gold required: " + Math.ceil(totalGold));
  console.log("Final pyramid height: " + totalHeight);
}
