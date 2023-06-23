function repeatStr(str, repetitions) {
  buff = "";
  for (let i = 0; i < repetitions; i++) {
    buff += str;
  }
  return buff;
}

console.log(repeatStr("abc", 3));
