function mirrorWords(input) {
  let pattern =
    /([@#])(?<wordOne>[A-Za-z][A-Za-z][A-Za-z]+)\1{2}(?<wordTwo>[A-Za-z][A-Za-z][A-Za-z]+)\1/g;

  let pairsArr = [];

  let matches = input[0].matchAll(pattern);
  if (matches) {
    for (let match of matches) {
      let wordOne = match.groups.wordOne;
      let wordTwo = match.groups.wordTwo;
      pairsArr.push([wordOne, wordTwo]);
    }
  }
  if (pairsArr.length > 0) {
    console.log(`${pairsArr.length} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  let pairsList = [];

  for (let pair of pairsArr) {
    let reversed = pair[1].split("").reverse().join("");
    if (pair[0] === reversed) {
      let line = `${pair[0]} <=> ${pair[1]}`;
      pairsList.push(line);
    }
  }
  if (pairsList.length > 0) {
    console.log("The mirror words are: ");
    console.log(pairsList.join(", "));
  } else {
    console.log("No mirror words!");
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
