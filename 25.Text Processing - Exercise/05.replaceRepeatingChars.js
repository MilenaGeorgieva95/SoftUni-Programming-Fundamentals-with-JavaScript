function replaceRepeatingChars(text) {
  let output = text[0];
  let textLength = text.length;

  for (let i = 1; i < textLength; i++) {
    let currentEl = text[i];
    let prevEl = text[i - 1];
    if (currentEl !== prevEl) {
      output += currentEl;
    }
  }

  console.log(output);
}

// function replaceRepeatingChars(str) {
//   let result = str[0];
//   let repeatedChar = str[0];

//   for (let char of str) {
//     if (char === repeatedChar) {
//       continue;
//     } else {
//       repeatedChar = char;
//       result += char;
//     }
//   }
//   console.log(result);
// }

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
