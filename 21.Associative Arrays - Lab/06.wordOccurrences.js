function wordOccurrences(data) {
  let result = {};

  for (let word of data) {
    if (result.hasOwnProperty(word)) {
      result[word]++;
      continue;
    }
    result[word] = 1;
  }
  let sortedArr = Object.entries(result).sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  );

  for (let [key, value] of sortedArr) {
    console.log(`${key} -> ${result[key]} times`);
  }
}

wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
