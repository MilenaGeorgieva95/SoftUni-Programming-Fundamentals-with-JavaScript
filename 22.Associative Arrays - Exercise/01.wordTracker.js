function wordTracker(input) {
  let map = new Map();

  let wordsToCheck = input.shift().split(" ");

  wordsToCheck.forEach((word) => map.set(word, 0));

  for (let word of input) {
    for (let wordToMatch of wordsToCheck) {
      if (word === wordToMatch) {
        let currentQuantity = map.get(word);
        map.set(word, currentQuantity + 1);
      }
    }
  }

  let sortedWords = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  sortedWords.forEach((el) => {
    console.log(el.join(" - "));
  });
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
