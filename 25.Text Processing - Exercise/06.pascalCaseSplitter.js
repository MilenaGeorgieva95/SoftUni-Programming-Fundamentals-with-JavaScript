function pascalCaseSplitter(input) {
  let words = [];
  let index = 0;
  let inputLength = input.length;

  for (let i = 1; i < inputLength; i++) {
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
      words.push(input.substring(index, i));
      index = i;
    }
  }
  words.push(input.substring(index));
  console.log(words.join(", "));
}

// function pascalCaseSplitter(str) {
//   let result = [];
//   let word = str[0];

//   for (let i = 1; i < str.length; i++) {
//     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//       result.push(word);
//       word = str[i];
//     } else {
//       word += str[i];
//     }
//     if (i === str.length - 1) {
//       result.push(word);
//     }
//   }
//   console.log(result.join(", "));
// }

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
