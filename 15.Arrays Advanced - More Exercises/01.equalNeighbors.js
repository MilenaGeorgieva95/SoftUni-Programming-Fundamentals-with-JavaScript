function equalNeighbors(input) {
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    let curArr = input[i];
    let nextArr = [];

    if (i !== input.length - 1) {
      nextArr = input[i + 1];
    }

    if (nextArr) {
      for (let j = 0; j < curArr.length; j++) {
        if (nextArr[j] === curArr[j]) {
          counter++;
        }
        if (curArr[j] === curArr[j + 1]) {
          counter++;
        }
      }
    }
  }

  console.log(counter);
}

equalNeighbors([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);
