function serializeString(input) {
  let str = input[0];
  let result = new Map();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result.has(char)) {
      let tempArr = result.get(char);
      tempArr.push(i);
      result.set(char, tempArr);
    } else {
      result.set(char, [i]);
    }
  }

  for (let [key, value] of result) {
    console.log(key + ":" + value.join("/"));
  }
}

serializeString(["abababa"]);
