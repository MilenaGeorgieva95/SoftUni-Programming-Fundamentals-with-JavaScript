function login(input) {
  let index = 0;
  let username = input[index];
  index++;
  let pass = "";
  for (let i = username.length - 1; i >= 0; i--) {
    pass += username[i];
  }
  let counter = 0;
  let isBlocked = false;
  let command = input[index];
  index++;
  while (command !== pass) {
    counter++;
    if (counter === 4) {
      console.log(`User ${username} blocked!`);
      isBlocked = true;
      break;
    }
    console.log("Incorrect password. Try again.");
    command = input[index];
    index++;
  }
  if (!isBlocked) {
    console.log(`User ${username} logged in.`);
  }
}
