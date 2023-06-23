function gladiatorInventory(arr) {
  let inventory = arr.shift().split(" ");
  for (el of arr) {
    let command = el.split(" ");
    let action = command[0];
    let item = command[1];
    if (action === "Upgrade") {
      let upgradeArr = item.split("-");
      item = upgradeArr[0];
      let upgrade = item + ":" + upgradeArr[1];
      if (inventory.includes(item)) {
        let index = inventory.indexOf(item) + 1;
        inventory.splice(index, 0, upgrade);
      }
    }
    switch (action) {
      case "Buy":
        if (!inventory.includes(item)) {
          inventory.push(item);
        }
        break;
      case "Trash":
        if (inventory.includes(item)) {
          let index = inventory.indexOf(item);
          inventory.splice(index, 1);
        }
        break;
      case "Repair":
        if (inventory.includes(item)) {
          let index = inventory.indexOf(item);
          let repair = inventory.splice(index, 1).toString();
          inventory.push(repair);
        }
        break;
    }
  }
  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
