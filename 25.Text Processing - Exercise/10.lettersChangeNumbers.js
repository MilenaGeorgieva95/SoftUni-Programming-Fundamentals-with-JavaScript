function lettersChangeNumbers(input) {
  let nums = input.split(" ");
  let sum = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let str of nums) {
    if (str) {
      let startLetter = str.substring(0, 1);
      let startCode = startLetter.charCodeAt(0);
      let endLetter = str.slice(-1);
      let endCode = endLetter.charCodeAt(0);
      let num = Number(str.substring(1, str.length - 1));
      let indexStart = alphabet.indexOf(startLetter.toLowerCase()) + 1;
      let indexEnd = alphabet.indexOf(endLetter.toLowerCase()) + 1;
      let tempSum = 0;

      if (startCode >= 65 && startCode <= 90) {
        tempSum += num / indexStart;
      } else {
        tempSum += num * indexStart;
      }

      if (endCode >= 65 && endCode <= 90) {
        tempSum -= indexEnd;
      } else {
        tempSum += indexEnd;
      }
      sum += tempSum;
    }
  }
  console.log(sum.toFixed(2));
}

lettersChangeNumbers("P34562Z q2576f   H456z");
