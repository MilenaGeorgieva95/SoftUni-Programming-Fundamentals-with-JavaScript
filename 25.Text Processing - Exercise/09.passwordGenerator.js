function passwordGenerator(input) {
  let password = input[0].concat(input[1]).toLowerCase();
  let replacement = input[2].toUpperCase().split("");
  let vowelsCodes = [97, 101, 105, 111, 117];
  let index = 0;
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    let charCode = password.charCodeAt(i);
    if (vowelsCodes.includes(charCode)) {
      password = password.replace(char, replacement[index]);
      index++;
      if (index === replacement.length) {
        index = 0;
      }
    }
  }
  let result = password.split("").reverse().join("");
  console.log("Your generated password is " + result);
}

passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
