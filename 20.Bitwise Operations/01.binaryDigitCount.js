let number = 20;
let digit = 0;
let counter = 0;

while (number > 0) {
  let remainer = number % 2;
  if (remainer === digit) {
    counter++;
  }
  number = Math.trunc(number / 2);
}

console.log(counter);
