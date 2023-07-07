function cutAndReverse(input) {
  let firstHalf = input
    .split("")
    .slice(0, input.length / 2)
    .reverse()
    .join("");

  let secondHalf = input
    .split("")
    .slice(input.length / 2)
    .reverse()
    .join("");

  console.log(firstHalf);
  console.log(secondHalf);
}

// function cutAndReverse(str) {
//   let middle = str.length / 2;
//   let firsthalf = str.substring(0, middle);
//   let secondhalf = str.substring(middle);

//   console.log(firsthalf.split("").reverse().join(""));
//   console.log(secondhalf.split("").reverse().join(""));
// }

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
