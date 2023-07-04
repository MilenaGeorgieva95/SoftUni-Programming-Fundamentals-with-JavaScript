function bitReplacer(num, position) {
  let mask = ~(1 << position);
  console.log(mask.toString(2));
  console.log(num.toString(2));
  let result = num & mask;
  console.log(result);
}
bitReplacer(25, 3);
