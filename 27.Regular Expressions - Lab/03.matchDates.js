function matchDates(input) {
  let text = input[0];
  let pattern =
    /\b(?<day>\d{2})([\.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
  let matches = text.matchAll(pattern);

  for (let match of matches) {
    console.log(
      `Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`
    );
  }
}

matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/091973, 1/Feb/2016",
]);
