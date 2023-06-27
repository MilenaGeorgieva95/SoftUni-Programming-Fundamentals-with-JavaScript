function two(input) {
  let arr = input.shift().split(" ").map(Number);

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Finish") {
    let tokens = command.split(" ");
    let action = tokens[0];
    let value = Number(tokens[1]);

    switch (action) {
      case "Add":
        arr.push(value);
        break;
      case "Remove":
        let indexEl = arr.indexOf(value);
        if (indexEl !== -1) {
          arr.splice(indexEl, 1);
        }
        break;
      case "Replace":
        let indexEl2 = arr.indexOf(value);
        let replacementValue = Number(tokens[2]);
        if (indexEl2 !== -1) {
          arr.splice(indexEl2, 1, replacementValue);
        }
        break;
      case "Collapse":
        arr = arr.filter((el) => el >= value);
        break;
    }

    command = input[index];
    index++;
  }

  console.log(arr.join(" "));
}

two(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
