function addSubstract(a, b, c) {
  function sum(a, b) {
    return a + b;
  }
  let sumResult = sum(a, b);

  function substract(sumResult, c) {
    return sumResult - c;
  }

  return substract(sumResult, c);
}
