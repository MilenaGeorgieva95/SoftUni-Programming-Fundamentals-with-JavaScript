function rightPlace(str, char, str2) {
  let result = str.replace("_", char);
  let output = result === str2 ? "Matched" : "Not Matched";
  console.log(output);
}
