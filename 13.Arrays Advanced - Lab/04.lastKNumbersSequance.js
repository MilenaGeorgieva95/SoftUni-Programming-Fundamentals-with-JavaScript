function lastKNumbersSequence(targetElementsCount, elementsToSumCount) {
  let resultArr = [1];

  while (targetElementsCount > resultArr.length) {
    let sum = 0;
    let currArr = resultArr.slice(elementsToSumCount * -1);

    for (let i = 0; i < currArr.length; i++) {
      sum += currArr[i];
    }
    resultArr.push(sum);
  }
  console.log(resultArr.join(" "));
}

lastKNumbersSequence(6, 3);
