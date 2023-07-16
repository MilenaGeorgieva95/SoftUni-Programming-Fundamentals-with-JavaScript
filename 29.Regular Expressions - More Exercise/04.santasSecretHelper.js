function santasSecretHelper(input) {
  let key = Number(input.shift());
  let messagesArr = [];
  let index = 0;
  let command = input[index];
  index++;

  while (command !== "end") {
    let newMessage = "";
    for (let i = 0; i < command.length; i++) {
      let charCode = command.charCodeAt(i);
      let newCode = charCode - key;
      let newChar = String.fromCharCode(newCode);
      newMessage += newChar;
    }
    messagesArr.push(newMessage);

    command = input[index];
    index++;
  }

  let pattern = /@(?<name>[A-Za-z]+)[^@!:>-]*!(?<behavior>[N|G])!/;

  for (let child of messagesArr) {
    let match = child.match(pattern);
    if (match) {
      if (match.groups.behavior === "G") {
        console.log(match.groups.name);
      }
    }
  }
}

santasSecretHelper([
  "4",
  "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
  "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
  ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
  "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnz{nz%K%nohwn",
  "DReh}e=<4lhzj1%K%",
  "end",
]);
