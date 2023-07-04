function partyTime(input) {
  let vipList = [];
  let regularList = [];

  let command = input.shift();

  while (command !== "PARTY") {
    if (isNaN(command[0])) {
      regularList.push(command);
    } else {
      vipList.push(command);
    }
    command = input.shift();
  }

  let allGuests = vipList.concat(regularList);

  for (let guest of input) {
    if (allGuests.includes(guest)) {
      allGuests.splice(allGuests.indexOf(guest), 1);
    }
  }
  console.log(allGuests.length);
  allGuests.forEach((guest) => console.log(guest));
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
