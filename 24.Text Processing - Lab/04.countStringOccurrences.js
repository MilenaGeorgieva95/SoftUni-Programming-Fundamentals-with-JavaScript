function countStringOccurences(text, wordToCount) {
  let words = text.split(" ");
  let counter = 0;

  for (let word of words) {
    if (word === wordToCount) {
      counter++;
    }
  }

  console.log(counter);
}

countStringOccurences("This is a word and it also is a sentence", "is");
