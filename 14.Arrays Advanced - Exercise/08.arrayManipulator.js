function arrayManipulator(intArr, commandsStr) {
  let isFinished = false;
  for (let i = 0; i < commandsStr.length; i++) {
    let command = commandsStr[i].split(" ");
    let el = 0;
    let elCollection = [];
    let index = 0;
    switch (command[0]) {
      case "add":
        index = command[1];
        el = Number(command[2]);
        intArr.splice(index, 0, el);
        break;
      case "addMany":
        index = Number(command[1]);
        for (let i = 2; i < command.length; i++) {
          let curEl = Number(command[i]);
          elCollection.push(curEl);
        }
        intArr.splice(index, 0, elCollection);
        intArr = intArr.flat();
        break;
      case "contains":
        el = Number(command[1]);
        index = intArr.indexOf(el);
        console.log(index);
        break;
      case "remove":
        index = Number(command[1]);
        intArr.splice(index, 1);
        break;
      case "shift":
        let rotations = Number(command[1]);
        for (let i = 0; i < rotations; i++) {
          let curEl = intArr.shift();
          intArr.push(curEl);
        }
        break;
      case "sumPairs":
        let curArr = [];
        for (let i = 0; i < intArr.length; i++) {
          let curEl = Number(intArr[i]);
          i++;
          let curEl2 = Number(intArr[i]);
          let curSum = 0;

          if (curEl && curEl2) {
            curSum = curEl + curEl2;
            curArr.push(curSum);
          } else {
            curArr.push(curEl);
          }
        }
        intArr = curArr;
        break;
      case "print":
        isFinished = true;
        break;
    }
    if (isFinished) {
      console.log(`[ ${intArr.join(", ")} ]`);
      break;
    }
  }
}

arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
