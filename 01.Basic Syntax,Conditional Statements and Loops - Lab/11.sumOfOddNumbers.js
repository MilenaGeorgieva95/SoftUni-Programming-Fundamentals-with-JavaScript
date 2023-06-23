function sumOfOddNumbers(n) {
  let k = 1;
  let sum = 0;
  while (n > 0) {
    console.log(k);
    sum += k;
    k += 2;
    n--;
  }
  console.log("Sum: " + sum);
}
