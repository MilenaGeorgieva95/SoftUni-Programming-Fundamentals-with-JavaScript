function substring(str, index, elCount) {
  let result = str.slice(index, index + elCount);

  console.log(result);
}

substring("ASentence", 1, 8);
