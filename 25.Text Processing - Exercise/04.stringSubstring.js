function stringSubstring(word, text) {
  let textArr = text.split(" ");

  let isNotFound = true;

  for (let el of textArr) {
    if (word.toLowerCase() === el.toLowerCase()) {
      console.log(word);
      isNotFound = false;
      break;
    }
  }

  if (isNotFound) {
    console.log(`${word} not found!`);
  }
}

// function stringSubstring(word, text) {
//   let template = text.toLowerCase().split(" ");
//   word = word.toLowerCase();

//   if (!template.includes(word)) {
//     console.log(`${word} not found!`);
//   } else {
//     for (let wordToMatch of template) {
//       if (wordToMatch===word) {
//         console.log(word);
//       }
//     }
//   }
// }

stringSubstring("Javascript", "JavaScript is the best programming language");
