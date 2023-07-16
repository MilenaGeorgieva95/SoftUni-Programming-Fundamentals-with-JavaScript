function postOffice(input) {
  let textParts = input[0].split("|");
  let wordsArr = textParts[2].split(" ");

  let capitalsPattern = /(?<=([#$%*&]))[A-Z]+(?=(\1))/g;
  let asciiLengthPattern = /(?<ascii>[6-9][0-9]):(?<length>[0-9]{2})/g;

  let resultPairs = [];

  let capitalLetters = textParts[0].match(capitalsPattern);

  if (capitalLetters) {
    capitalLetters = capitalLetters.join("");

    let asciiLengthArr = [];

    let asciiLengthMatches = textParts[1].matchAll(asciiLengthPattern);
    if (asciiLengthMatches) {
      for (let match of asciiLengthMatches) {
        asciiLengthArr.push([
          Number(match.groups.ascii),
          Number(match.groups.length),
        ]);
      }
    }

    for (let capital of capitalLetters) {
      let asciiMatch = asciiLengthArr.find(
        (el) => el[0] === capital.charCodeAt(0)
      );
      if (asciiMatch) {
        resultPairs.push([capital, asciiMatch[1] + 1]);
      }
    }
  }

  if (resultPairs) {
    for (let pair of resultPairs) {
      let word = wordsArr.find(
        (el) => el[0] === pair[0] && el.length === pair[1]
      );
      if (word) {
        console.log(word);
      }
    }
  }
}

postOffice([
  "sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos",
]);

//words- [A-Z] fixed length
//part one- capital letters for each word surrounded by #$%*& same both sides
//part two- starting letter askii code/65 : word length/05(exactly 2 digits), code must match in first part;
//part three- words- have to start with the capital letter from part two and have the length from part two(any symbol no spaces);
//when word is found print it

//bykva i duljina
//list=[
//[Capital,length];
//]
