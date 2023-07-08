function valueOfString(input) {
  let str = input[0];
  let command = input[1];
  let isUpperCase = true;

  let upperCaseSum = 0;
  let lowerCaseSum = 0;
  if (command === "LOWERCASE") {
    isUpperCase = false;
  }
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (isUpperCase && code >= 65 && code <= 90) {
      upperCaseSum += code;
    } else if (!isUpperCase && code >= 97 && code <= 122) {
      lowerCaseSum += code;
    }
  }
  if (isUpperCase) {
    console.log("The total sum is: " + upperCaseSum);
  } else {
    console.log("The total sum is: " + lowerCaseSum);
  }
}

valueOfString(["AC/DC", "UPPERCASE"]);
