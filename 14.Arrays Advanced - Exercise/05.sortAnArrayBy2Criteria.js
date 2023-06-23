function sortAnArrayBy2Criteria(input) {
  let sorted = input.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  });
  //-----------------------------------------
  let sortedArr = input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log(sorted.join("\n"));
  console.log(sortedArr.join("\n"));
}

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
