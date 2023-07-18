function destinationMapper(input) {
  let pattern = /([=\/])(?<location>[A-Z][A-Za-z][A-Za-z]+)\1/g;

  let destinationsArr = [];
  let travelPoints = 0;
  let matches = input.matchAll(pattern);
  if (matches) {
    for (let match of matches) {
      let destination = match.groups.location;
      destinationsArr.push(destination);
      travelPoints += destination.length;
    }
  }

  console.log(`Destinations: ${destinationsArr.join(", ")}`);

  console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
