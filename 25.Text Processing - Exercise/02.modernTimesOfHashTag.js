function modernTimesOfHashTag(text) {
  let textArr = text.split(" ");
  let result = [];

  for (let word of textArr) {
    if (word.startsWith("#") && word.length > 1) {
      let singleWord = word.substring(1);
      let isValid = true;

      for (let i = 0; i < singleWord.length; i++) {
        let num = singleWord.charCodeAt(i);
        if (!((num >= 65 && num <= 90) || (num >= 97 && num <= 122))) {
          isValid = false;
        }
      }
      if (isValid) {
        result.push(singleWord);
      }
    }
  }
  console.log(result.join("\n"));
}

// function modernTimesOfHashTag(input) {
//   let inputArr = input.split(" ");

//   for (let word of inputArr) {
//     if (word[0] === "#" && word.length > 1) {
//       let wordArray = word.split("");
//       wordArray.shift();

//       let wordToPrint = "";

//       for (let char of wordArray) {
//         if (!isNaN(char)) {
//           wordToPrint = "";
//           break;
//         } else {
//           wordToPrint += char;
//         }
//       }

//       if (wordToPrint.length > 0) {
//         console.log(wordToPrint);
//       }
//     }
//   }
// }

modernTimesOfHashTag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
