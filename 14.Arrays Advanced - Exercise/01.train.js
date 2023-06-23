function train(arr) {
  let wagons = arr.shift().split(" ");
  let maxSeats = Number(arr.shift());
  for (let command of arr) {
    if (command.includes("Add")) {
      command = command.split(" ");
      let num = command.pop();
      wagons.push(num);
    } else {
      wagons = wagons.map(Number);
      let newPassangers = Number(command);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + newPassangers <= maxSeats) {
          wagons[i] += newPassangers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
