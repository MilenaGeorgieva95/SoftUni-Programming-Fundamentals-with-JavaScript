function arenaTier(input) {
  let index = 0;
  let command = input[index];
  index++;

  let list = [];

  while (command !== "Ave Cesar") {
    if (command.includes("vs")) {
      let loser = "";
      let [playerOne, playerTwo] = command.split(" vs ");
      let objOne = list.find((obj) => obj.name === playerOne);
      let objTwo = list.find((obj) => obj.name === playerTwo);

      if (objOne && objTwo) {
        let playerOneStash = Object.entries(objOne);
        let playerTwoStash = Object.entries(objTwo);

        for (let i = 1; i < playerOneStash.length; i++) {
          let [itemOne, skillOne] = playerOneStash[i];

          for (let j = 1; j < playerTwoStash.length; j++) {
            let [itemTwo, skillTwo] = playerTwoStash[j];
            if (itemOne === itemTwo) {
              if (skillOne > skillTwo) {
                loser = "playerTwo";
              } else {
                loser = "playerOne";
              }
            }
          }
        }
      }

      if (loser === "playerTwo") {
        let index = list.indexOf(objTwo);
        list.splice(index, 1);
      } else if (loser === "playerOne") {
        let index2 = list.indexOf(objOne);
        list.splice(index2, 1);
      }
    } else {
      let [name, skill, points] = command.split(" -> ");

      let existingObj = list.find((obj) => obj.name === name);
      if (existingObj) {
        let existingSkill = existingObj.hasOwnProperty(skill);
        if (existingSkill) {
          if (existingObj[skill] < Number(points)) {
            existingObj[skill] = Number(points);
          }
        } else {
          existingObj[skill] = Number(points);
        }
      } else {
        let tempObj = {};
        tempObj["name"] = name;
        tempObj[skill] = Number(points);
        list.push(tempObj);
      }
    }

    command = input[index];
    index++;
  }

  for (let obj of list) {
    let total = 0;
    for (let key in obj) {
      if (!isNaN(obj[key])) {
        total += obj[key];
      }
      obj["total"] = total;
    }
  }
  list.sort((a, b) => {
    if (b.total - a.total === 0) {
      return a.name.localeCompare(b.name);
    }
    return b.total - a.total;
  });

  for (let obj of list) {
    let sortedSkills = Object.entries(obj);
    let name = sortedSkills.shift();
    name = name[1];
    let total = sortedSkills.pop();
    total = total[1];
    sortedSkills.sort((a, b) => {
      if (b[1] - a[1] === 0) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    });
    console.log(`${name}: ${total} skill`);
    for (let el of sortedSkills) {
      let [skill, points] = el;
      console.log(`- ${skill} <!> ${points}`);
    }
  }
}
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
