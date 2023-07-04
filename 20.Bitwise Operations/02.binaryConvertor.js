let number = 20;
let convertedNum = [];

while (number > 0) {
  let remainer = number % 2;
  convertedNum.push(remainer);
  number = Math.trunc(number / 2);
}

let binaryNum = convertedNum.reverse().join("");

console.log(binaryNum);
