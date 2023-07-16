function extractEmails(input) {
  let pattern =
    /(?<=\s|^)[a-zA-Z0-9]+([._\-]?[a-zA-Z0-9])*[._\-]?@[a-zA-Z0-9]([._\-]?[a-zA-Z0-9])*\.[a-zA-Z0-9]([._\-]?[a-zA-Z0-9])*/g;

  let matches = input.match(pattern);
  if (matches) {
    for (let match of matches) {
      console.log(match);
    }
  }
}

extractEmails(
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de."
);
