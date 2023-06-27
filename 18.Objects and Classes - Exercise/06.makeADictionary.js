function makeADictionary(inputArr) {
  let dictionary = [];

  for (line of inputArr) {
    let tempObj = JSON.parse(line);
    for (let [key, value] of Object.entries(tempObj)) {
      let obj = {
        item: key,
        description: value,
      };
      let itemRepeated = dictionary.find((m) => m.item === key);
      if (itemRepeated) {
        itemRepeated.description = value;
      } else {
        dictionary.push(obj);
      }
    }
  }
  dictionary.sort((a, b) => a.item.localeCompare(b.item));

  for (line of dictionary) {
    console.log(`Term: ${line.item} => Definition: ${line.description}`);
  }
}

makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
