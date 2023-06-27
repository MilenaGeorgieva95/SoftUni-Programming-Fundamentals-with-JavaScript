function arrayModifier(input) {
  let arr = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "end") {
    let tokens = command.split(" ");
    let elIndex1 = Number(tokens[1]);
    let elIndex2 = Number(tokens[2]);
    let el1 = arr[elIndex1];
    let el2 = arr[elIndex2];

    switch (tokens[0]) {
      case "swap":
        arr[elIndex1] = el2;
        arr[elIndex2] = el1;
        break;

      case "multiply":
        let multiplied = el1 * el2;
        arr.splice(elIndex1, 1, multiplied);
        break;
      case "decrease":
        arr = arr.map((el) => el - 1);
        break;
    }

    command = input[index];
    index++;
  }
  console.log(arr.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
