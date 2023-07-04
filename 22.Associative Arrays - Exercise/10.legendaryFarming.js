function legendaryFarming(input) {
  let arr = input.toLowerCase().split(" ");
  let obj = {
    motes: 0,
    shards: 0,
    fragments: 0,
  };
  let resultObj = {
    Dragonwrath: 0,
    Shadowmourne: 0,
    Valanyr: 0,
  };

  for (let i = 0; i < arr.length; i += 2) {
    let points = Number(arr[i]);
    let item = arr[i + 1];
    if (obj.hasOwnProperty(item)) {
      obj[item] += points;
      if (obj[item] >= 250) {
        break;
      }
    } else {
      if (resultObj.hasOwnProperty(item)) {
        resultObj[item] += points;
      } else {
        resultObj[item] = points;
      }
    }
  }
  for (let [key, value] of Object.entries(obj)) {
    let item = "Dragonwrath";
    let count = 0;
    switch (key) {
      case "motes":
        item = "Dragonwrath";
        count++;
        break;
      case "shards":
        item = "Shadowmourne";
        count++;
        break;
      case "fragments":
        item = "Valanyr";
        count++;
        break;
    }
    if (value >= 250) {
      obj[key] -= 250;
      resultObj[item]++;
    } else {
      delete resultObj[item];
    }
  }
  let itemsOne = Object.entries(obj);
  itemsOne.sort((a, b) => {
    if (b[1] - a[1] === 0) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  let itemsTwo = Object.entries(resultObj);
  let legendaryItem = itemsTwo.shift();
  legendaryItem = legendaryItem[0];
  console.log(legendaryItem + " obtained!");
  itemsTwo.sort((a, b) => a[0].localeCompare(b[0]));

  for (let legendaryItem of itemsOne) {
    let [item, score] = legendaryItem;
    console.log(`${item}: ${score}`);
  }
  for (let junkItem of itemsTwo) {
    let [item, score] = junkItem;
    console.log(`${item}: ${score}`);
  }
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
