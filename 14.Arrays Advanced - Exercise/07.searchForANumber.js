function searchForANumber(numbersArr, commandsArr) {
  let numbersToTake = commandsArr[0];
  let numsToDelete = commandsArr[1];
  let searchedNums = commandsArr[2];

  let newArr = numbersArr.slice(0, numbersToTake);

  newArr.splice(0, numsToDelete);

  let numsCounter = newArr.filter((el) => el === searchedNums).length;
  console.log(`Number ${searchedNums} occurs ${numsCounter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
