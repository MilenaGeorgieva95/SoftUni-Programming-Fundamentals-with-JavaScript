function addAndRemove(commandArr) {
  let resultArr = [];

  for (let i = 1; i <= commandArr.length; i++) {
    let command = commandArr[i - 1];
    switch (command) {
      case "add":
        resultArr.push(i);
        break;
      case "remove":
        resultArr.pop();
        break;
    }
  }
  if (resultArr.length >= 1) {
    console.log(resultArr.join(" "));
  } else {
    console.log("Empty");
  }
}

addAndRemove(["remove", "remove", "remove", "add", "add"]);
