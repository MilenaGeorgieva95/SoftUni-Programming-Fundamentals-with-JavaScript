function theImitationGame(input) {
  let code = input.shift();

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Decode") {
    let tokens = command.split("|");
    let action = tokens[0];

    switch (action) {
      case "Move":
        let num = Number(tokens[1]);
        let section = code.slice(0, num);
        code = code.replace(section, "");
        code = code.concat(section);
        break;
      case "Insert":
        let index = Number(tokens[1]);
        let value = tokens[2];
        let arr = code.split("");
        arr.splice(index, 0, value);
        code = arr.join("");

        break;
      case "ChangeAll":
        let toReplace = tokens[1];
        let replacement = tokens[2];
        code = code.split(toReplace).join(replacement);
    }

    command = input[index];
    index++;
  }
  console.log("The decrypted message is: " + code);
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
