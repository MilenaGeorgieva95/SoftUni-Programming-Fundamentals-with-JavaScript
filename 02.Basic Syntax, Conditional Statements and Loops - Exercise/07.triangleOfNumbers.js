function triangleOfNumbers(n) {
  for (let col = 1; col <= n; col++) {
    let buff = "";
    for (let row = 1; row <= col; row++) {
      buff += col + " ";
    }
    console.log(buff);
  }
}
