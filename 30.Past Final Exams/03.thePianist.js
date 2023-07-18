function thePianist(input) {
  let piecesCount = Number(input.shift());
  let list = [];

  for (let i = 0; i < piecesCount; i++) {
    let [piece, composer, key] = input.shift().split("|");
    let tempObj = {
      piece: piece,
      composer: composer,
      key: key,
    };
    list.push(tempObj);
  }

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Stop") {
    let tokens = command.split("|");

    switch (tokens[0]) {
      case "Add":
        let exists = list.find((obj) => obj["piece"] === tokens[1]);
        if (exists) {
          console.log(tokens[1] + " is already in the collection!");
        } else {
          let tempObj = {
            piece: tokens[1],
            composer: tokens[2],
            key: tokens[3],
          };
          list.push(tempObj);
          console.log(
            `${tempObj.piece} by ${tempObj.composer} in ${tempObj.key} added to the collection!`
          );
        }
        break;
      case "Remove":
        let pieceExists = list.find((obj) => obj["piece"] === tokens[1]);
        if (pieceExists) {
          let pieceIndex = list.indexOf(pieceExists);
          let removed = list.splice(pieceIndex, 1);
          console.log(`Successfully removed ${removed[0]["piece"]}!`);
        } else {
          console.log(
            `Invalid operation! ${tokens[1]} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        let pieceIsPresent = list.find((obj) => obj.piece === tokens[1]);
        if (pieceIsPresent) {
          pieceIsPresent.key = tokens[2];
          console.log(
            `Changed the key of ${pieceIsPresent.piece} to ${pieceIsPresent.key}!`
          );
        } else {
          console.log(
            `Invalid operation! ${tokens[1]} does not exist in the collection.`
          );
        }
    }

    command = input[index];
    index++;
  }
  for (let data of list) {
    console.log(
      `${data.piece} -> Composer: ${data.composer}, Key: ${data.key}`
    );
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

//list[
//    pieces{
// piece
// composer
// key

//}
//]
