function asciiSimulator(input) {
  let startChar = input[0];
  let endChar = input[1];
  let codeOne = startChar.charCodeAt(0);
  let codeTwo = endChar.charCodeAt(0);

  let startCode = Math.min(codeOne, codeTwo);
  let endCode = Math.max(codeOne, codeTwo);

  let str = input[2];
  let sum = 0;

  for (let char of str) {
    let charCode = char.charCodeAt(0);

    if (charCode > startCode && charCode < endCode) {
      sum += charCode;
    }
  }

  console.log(sum);
}

asciiSimulator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
