function passwordValidator(password) {
  let validationTypeCharacters = false;
  let validationTwoDigits = false;
  let validationLengthOfPassword = false;

  let passwordLength = password.length;
  let numOfDigits = 0;
  let numTypeChar = 0;

  for (let i = 0; i < passwordLength; i++) {
    let curElement = password[i];
    let curElementAsCode = curElement.charCodeAt();

    // Checks if the password is between 6 and 10 characters long
    if (passwordLength >= 6 && passwordLength <= 10) {
      validationLengthOfPassword = true;
    }

    // Counts the number of digits
    if (curElementAsCode > 47 && curElementAsCode < 58) {
      numOfDigits++;
    }

    // Checks if the password contains only allowed characters
    if (
      (curElementAsCode > 47 && curElementAsCode < 58) ||
      (curElementAsCode > 64 && curElementAsCode < 91) ||
      (curElementAsCode > 96 && curElementAsCode < 123)
    ) {
      numTypeChar++;
    }
  }

  if (numOfDigits >= 2) {
    validationTwoDigits = true;
  }

  if (numTypeChar >= passwordLength) {
    validationTypeCharacters = true;
  }

  if (!validationLengthOfPassword) {
    console.log(`Password must be between 6 and 10 characters`);
  }

  if (!validationTypeCharacters) {
    console.log(`Password must consist only of letters and digits`);
  }

  if (!validationTwoDigits) {
    console.log(`Password must have at least 2 digits`);
  }

  if (
    validationLengthOfPassword === true &&
    validationTwoDigits === true &&
    validationTypeCharacters === true
  ) {
    console.log(`Password is valid`);
  }
}
