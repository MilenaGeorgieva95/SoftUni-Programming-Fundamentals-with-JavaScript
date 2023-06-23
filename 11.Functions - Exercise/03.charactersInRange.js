function rangeAskii(char1, char2) {
  //checking which askii num is smaller to be start
  //to get the askii number coresponding to char1 use .charCodeAt()
  let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
  let endChar = Math.max(char1.charCodeAt(), char2.charCodeAt());

  let charArray = [];

  //from smaller akii to higher askii without char1 i char2
  for (let i = startChar + 1; i < endChar; i++) {
    //String.fromCharCode(i) to turn Askii nums to string values(letters as strings)
    charArray.push(String.fromCharCode(i));
    //it is not a func so we don't need return
  }
  return charArray.join(" ");
}
