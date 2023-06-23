function printAndSum(start, end) {
  let buff = "";
  let sum = 0;

  for (let i = start; i <= end; i++) {
    buff += i + " ";
    sum += i;
  }
  console.log(buff);
  console.log("Sum: " + sum);
}
