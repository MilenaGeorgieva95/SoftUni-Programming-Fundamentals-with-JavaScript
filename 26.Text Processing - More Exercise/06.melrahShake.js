function melrahShake(input) {
  let text = input[0];
  let pattern = input[1];
  let areValidParams = false;

  while (pattern.length >= 0) {
    areValidParams = true;
    let firstMatch = text.indexOf(pattern);
    let lastMatch = text.lastIndexOf(pattern);

    if (
      firstMatch < 0 ||
      lastMatch < 0 ||
      firstMatch === lastMatch ||
      !pattern
    ) {
      console.log("No shake.");
      console.log(text);
      break;
    }

    let tempText = text.split("");
    tempText.splice(lastMatch, pattern.length);
    tempText.splice(firstMatch, pattern.length);
    text = tempText.join("");

    let tempPat = pattern.split("");
    tempPat.splice(pattern.length / 2, 1);
    pattern = tempPat.join("");
    console.log("Shaked it.");
  }
  if (!areValidParams) {
    console.log("No shake.");
    console.log(text);
  }
}
melrahShake(["##mtm!!mm.mm*mtm.#", "m"]);
