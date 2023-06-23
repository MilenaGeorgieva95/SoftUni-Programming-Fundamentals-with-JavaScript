function distinctArray(numbers) {
  let uniqueElArr = [];
  for (let number of numbers) {
    if (!uniqueElArr.includes(number)) {
      uniqueElArr.push(number);
    }
  }
  console.log(uniqueElArr.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
