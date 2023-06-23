function englishName(num) {
  let lastDigit = num % 10;
  let englishName = "";
  switch (lastDigit) {
    case 1:
      englishName = "one";
      break;
    case 2:
      englishName = "two";
      break;
    case 3:
      englishName = "three";
      break;
    case 4:
      englishName = "four";
      break;
    case 5:
      englishName = "five";
      break;
    case 6:
      englishName = "six";
      break;
    case 7:
      englishName = "seven";
      break;
    case 8:
      englishName = "eight";
      break;
    case 9:
      englishName = "nine";
      break;
    case 0:
      englishName = "zero";
      break;
  }
  console.log(englishName);
}

englishName(512);
