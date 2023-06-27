function shootForTheWin(input) {
  let arr = input.shift().split(" ").map(Number);

  let index = 0;
  let command = input[index];
  index++;
  let counter = 0;

  while (command !== "End") {
    let indexShot = Number(command);
    if (indexShot < arr.length && arr[indexShot] !== -1) {
      let temp = arr[indexShot];
      arr[indexShot] = -1;
      counter++;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
          if (arr[i] > temp) {
            arr.splice(i, 1, arr[i] - temp);
          } else {
            arr.splice(i, 1, arr[i] + temp);
          }
        }
      }
    }

    command = input[index];
    index++;
  }

  console.log(`Shot targets: ${counter} -> ${arr.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
