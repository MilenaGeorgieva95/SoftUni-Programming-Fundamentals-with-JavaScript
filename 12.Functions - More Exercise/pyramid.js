function pyramid(num) {
  for (let i = 0; i <= num; i += 2) {
    let buff = "";
    for (let j = 0; j < i; j++) {
      buff += "O";
    }
    console.log(buff);
  }
  for (let i = num; i > 0; i -= 2) {
    let buff = "";
    for (let j = i; j > 0; j--) {
      buff += "O";
    }
    console.log(buff);
  }
}

pyramid(10);
