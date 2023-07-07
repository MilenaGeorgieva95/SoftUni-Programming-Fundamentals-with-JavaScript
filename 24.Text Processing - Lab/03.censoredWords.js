function censoredWords(text, word) {
  //   let result = text.split(word);
  //   console.log(result.join("*".repeat(word.length)));

  //   while (text.includes(word)) {
  //     text = text.replace(word, "*".repeat(word.length));
  //   }

  while (text.includes(word)) {
    let start = text.indexOf(word);
    let end = start + word.length;

    let startText = text.substring(0, start);
    let endText = text.substring(end);

    text = startText + "*".repeat(word.length) + endText;
  }

  console.log(text);
}

censoredWords("A small sentence with some words", "small");
