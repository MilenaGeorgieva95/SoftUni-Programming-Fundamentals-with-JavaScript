function convertToObject(jsonStr) {
  let myObj = JSON.parse(jsonStr);

  //   for (key in myObj) {
  //     console.log(key + ": " + myObj[key]);
  //   }

  for (let [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
