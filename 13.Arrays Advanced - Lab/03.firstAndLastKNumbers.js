function firstAndLastKNumbers(arrNums) {
  let k = arrNums.shift();

  let firstArr = arrNums.slice(0, k);
  let lastArr = arrNums.slice(data.length - k);

  console.log(firstArr.join(" "));
  console.log(lastArr.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
