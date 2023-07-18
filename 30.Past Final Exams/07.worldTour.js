function worldTour(input) {
  let list = input.shift();
  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Travel") {
    let tokens = command.split(":");

    switch (tokens[0]) {
      case "Add Stop":
        let addIndex = Number(tokens[1]);
        if (addIndex >= 0 && addIndex < list.length) {
          list =
            list.substring(0, addIndex) + tokens[2] + list.substring(addIndex);
        }
        console.log(list);
        break;
      case "Remove Stop":
        let startInd = Number(tokens[1]);
        let endInd = Number(tokens[2]);
        if (
          startInd >= 0 &&
          startInd < list.length &&
          endInd >= 0 &&
          endInd < list.length
        ) {
          list = list.substring(0, startInd) + list.substring(endInd + 1);
        }
        console.log(list);
        break;
      case "Switch":
        if (list.includes(tokens[1])) {
          list = list.split(tokens[1]).join(tokens[2]);
        }
        console.log(list);
        break;
    }
    command = input[index];
    index++;
  }
  console.log(`Ready for world tour! Planned stops: ${list}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
