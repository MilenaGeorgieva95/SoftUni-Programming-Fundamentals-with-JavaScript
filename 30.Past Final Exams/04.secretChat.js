function secretChat(input) {
  let message = input.shift();

  let index = 0;
  command = input[index];
  index++;

  while (command !== "Reveal") {
    let tokens = command.split(":|:");

    switch (tokens[0]) {
      case "InsertSpace":
        let insertIndex = Number(tokens[1]);
        let arr = message.split("");
        arr.splice(insertIndex, 0, " ");
        message = arr.join("");
        console.log(message);
        break;
      case "Reverse":
        if (message.includes(tokens[1])) {
          let reversed = tokens[1].split("").reverse().join("");
          let end = message.replace(tokens[1], "");
          message = end.concat(reversed);
          console.log(message);
        } else {
          console.log("error");
        }

        break;
      case "ChangeAll":
        let substring = tokens[1];
        let replacement = tokens[2];
        if (message.includes(tokens[1])) {
          let replaced = message.split(substring).join(replacement);
          message = replaced;
        }

        console.log(message);
        break;
    }

    command = input[index];
    index++;
  }
  console.log("You have a new text message: " + message);
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
