function dungeounestDark(dungeounsRooms) {
  let room = dungeounsRooms[0];
  let health = 100;
  let coins = 0;
  let arr = room.split("|");
  let roomCounter = 0;
  let isCompleted = true;

  for (let i = 0; i < arr.length; i++) {
    roomCounter++;
    let item = arr[i];
    let itemS = item.split(" ");
    let itemOrMonster = itemS[0];
    let score = Number(itemS[1]);

    if (itemOrMonster === "potion") {
      let initialHealth = health;
      health += score;
      if (health > 100) {
        health = 100;
      }
      console.log(`You healed for ${health - initialHealth} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (itemOrMonster === "chest") {
      coins += score;
      console.log(`You found ${score} coins.`);
    } else {
      health -= score;
      if (health <= 0) {
        isCompleted = false;
        console.log(`You died! Killed by ${itemOrMonster}.`);
        console.log(`Best room: ${roomCounter}`);
        break;
      } else {
        console.log(`You slayed ${itemOrMonster}.`);
      }
    }
  }
  if (isCompleted) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
