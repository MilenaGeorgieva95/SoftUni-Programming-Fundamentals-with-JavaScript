function armies(input) {
  let leaders = {};
  for (let line of input) {
    if (line.includes("arrives")) {
      let [leader, empty] = line.split(" arrives");
      leaders[leader] = {
        totalArmy: 0,
      };
    } else if (line.includes(":")) {
      let [leader, armyPair] = line.split(": ");
      if (leaders.hasOwnProperty(leader)) {
        let [army, count] = armyPair.split(", ");
        count = Number(count);
        leaders[leader][army] = count;
        leaders[leader]["totalArmy"] += count;
      }
    } else if (line.includes("+")) {
      let [army, armyAdd] = line.split(" + ");
      armyAdd = Number(armyAdd);
      for (let leader in leaders) {
        if (leaders[leader].hasOwnProperty(army)) {
          leaders[leader][army] += armyAdd;
          leaders[leader]["totalArmy"] += armyAdd;
        }
      }
    } else if (line.includes("defeated")) {
      let [leader, empty] = line.split(" defeated");
      delete leaders[leader];
    }
  }
  let sortedLeaders = Object.entries(leaders).sort(
    (a, b) => b[1]["totalArmy"] - a[1]["totalArmy"]
  );

  for (let leader of sortedLeaders) {
    console.log(`${leader[0]}: ${leader[1]["totalArmy"]}`);
    let sortedArmies = Object.entries(leader[1]);
    sortedArmies.shift();
    sortedArmies.sort((a, b) => b[1] - a[1]);

    for (let army of sortedArmies) {
      console.log(`>>> ${army[0]} - ${army[1]}`);
    }
  }
}

armies([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
