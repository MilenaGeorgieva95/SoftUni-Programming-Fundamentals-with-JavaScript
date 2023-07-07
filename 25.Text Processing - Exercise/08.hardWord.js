function hardWord(input) {
  let text = input[0];
  let words = input[1].sort((w1, w2) => w2.length - w1.length);

  for (let word of words) {
    let template = "_".repeat(word.length);
    while (text.includes(template)) {
      text = text.replace(template, word);
    }
  }
  console.log(text);
}

// function hardWord(input) {
//   let textArr = input[0].split(" ");

//   for (let word of textArr) {
//     for (let match of input[1]) {
//       if (word.includes("_") && (word.endsWith(".") || word.endsWith(","))) {
//         let char = word[word.length - 1];
//         let wordNoChar = word.substring(0, word.length - 1);
//         if (wordNoChar === "_".repeat(match.length)) {
//           let index = textArr.indexOf(word);
//           textArr[index] = match + char;
//         }
//       } else if (word === "_".repeat(match.length)) {
//         let index = textArr.indexOf(word);
//         textArr[index] = match;
//       }
//     }
//   }
//   console.log(textArr.join(" "));
// }

hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
