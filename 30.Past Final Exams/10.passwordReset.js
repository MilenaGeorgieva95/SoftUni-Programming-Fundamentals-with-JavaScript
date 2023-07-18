function passwordReset(input) {
  let password = input.shift();

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Done") {
    let tokens = command.split(" ");
    switch (tokens[0]) {
      case "TakeOdd":
        let newPassword = "";
        for (let i = 0; i < password.length; i++) {
          if (i % 2 !== 0) {
            newPassword += password[i];
          }
        }
        password = newPassword;
        console.log(password);
        break;
      case "Cut":
        let start = Number(tokens[1]);
        let end = start + Number(tokens[2]);
        let removed = password.substring(start, end);
        password = password.replace(removed, "");
        console.log(password);
        break;
      case "Substitute":
        if (password.includes(tokens[1])) {
          let tempPassword = password.split(tokens[1]).join(tokens[2]);
          password = tempPassword;
          console.log(password);
        } else {
          console.log("Nothing to replace!");
        }
        break;
    }

    command = input[index];
    index++;
  }
  console.log(`Your password is: ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
