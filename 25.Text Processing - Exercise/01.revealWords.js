function revealWords(words, text) {
  let wordsArr = words.split(", ");

  for (let word of wordsArr) {
    let wordStars = "*".repeat(word.length);
    text = text.replace(wordStars, word);
  }

  console.log(text);
}

// function revealWords(replacementsStr, text) {
//   let words = replacementsStr.split(", ");
//   let template = text.split(" ");

//   for (let word of template) {
//     if (word.includes("*")) {
//       for (let replacement of words) {
//         if (word === "*".repeat(replacement.length)) {
//           let index = template.indexOf(word);
//           template[index] = replacement;
//         }
//       }
//     }
//   }
//   console.log(template.join(" "));
// }

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
