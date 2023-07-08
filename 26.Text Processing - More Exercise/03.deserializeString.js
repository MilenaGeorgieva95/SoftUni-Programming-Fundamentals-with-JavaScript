function deserializeString(input) {
  let index = 0;
  let command = input[index];
  index++;

  let list = {};
  while (command !== "end") {
    let [char, values] = command.split(":");
    let indexes = values.split("/").map(Number);

    list[char] = indexes;

    command = input[index];
    index++;
  }

  let result = [];
  for (let [key, value] of Object.entries(list)) {
    for (let index of value) {
      result[index] = key;
    }
  }

  console.log(result.join(""));
}

deserializeString(["a:0/2/4/6", "b:1/3/5", "end"]);
