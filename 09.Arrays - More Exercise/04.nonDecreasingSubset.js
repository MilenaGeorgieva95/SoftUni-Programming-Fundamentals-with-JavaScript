function nonDecreasingSubset(arr) {
  let curEl = Number.MIN_SAFE_INTEGER;
  arr = arr.filter((el) => {
    if (el >= curEl) {
      curEl = el;
      return el >= curEl;
    }
  });
  console.log(arr.join(" "));
}

nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
