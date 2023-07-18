function heroesOfCodeAndLogic(input) {
  let heroesCount = Number(input.shift());
  let heroesList = {};

  for (let i = 0; i < heroesCount; i++) {
    let [hero, hp, mp] = input.shift().split(" ");
    heroesList[hero] = [Number(hp), Number(mp)];
  }

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "End") {
    let tokens = command.split(" - ");
    switch (tokens[0]) {
      case "CastSpell":
        let spellMp = Number(tokens[2]);
        let availableMp = heroesList[tokens[1]][1];
        if (availableMp >= spellMp) {
          let leftMp = availableMp - spellMp;
          heroesList[tokens[1]][1] = leftMp;
          console.log(
            `${tokens[1]} has successfully cast ${tokens[3]} and now has ${leftMp} MP!`
          );
        } else {
          console.log(
            `${tokens[1]} does not have enough MP to cast ${tokens[3]}!`
          );
        }
        break;
      case "TakeDamage":
        let damageHp = Number(tokens[2]);
        let availableHp = heroesList[tokens[1]][0];
        if (availableHp > damageHp) {
          let leftHp = availableHp - damageHp;
          heroesList[tokens[1]][0] = leftHp;
          console.log(
            `${tokens[1]} was hit for ${tokens[2]} HP by ${tokens[3]} and now has ${leftHp} HP left!`
          );
        } else {
          delete heroesList[tokens[1]];
          console.log(`${tokens[1]} has been killed by ${tokens[3]}!`);
        }
        break;
      case "Recharge":
        let charge = Number(tokens[2]);
        let currMp = heroesList[tokens[1]][1];
        let recharged = 200 - currMp;
        if (charge > recharged) {
          heroesList[tokens[1]][1] = 200;
          console.log(`${tokens[1]} recharged for ${recharged} MP!`);
        } else {
          heroesList[tokens[1]][1] += charge;
          console.log(`${tokens[1]} recharged for ${charge} MP!`);
        }
        break;
      case "Heal":
        let heal = Number(tokens[2]);
        let curHp = heroesList[tokens[1]][0];
        let healedHp = 100 - curHp;
        if (heal > healedHp) {
          heroesList[tokens[1]][0] = 100;
          console.log(`${tokens[1]} healed for ${healedHp} HP!`);
        } else {
          heroesList[tokens[1]][0] += heal;
          console.log(`${tokens[1]} healed for ${heal} HP!`);
        }
        break;
    }
    command = input[index];
    index++;
  }

  for (let hero in heroesList) {
    console.log(hero);
    console.log(`  HP: ${heroesList[hero][0]}`);
    console.log(`  MP: ${heroesList[hero][1]}`);
  }
}

heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log("****************");
heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
//hero-mp(mana)=max200mp,hp(hit)=max100hp
//commands=>end
//heroesList{
//            hero:[mp,hp];
//castSpell-hero,mp needed,spell name;
//takeDamage -hero(>0),hp,attacker/if hp<=0 delete
//recharge-hero,amount mp(max200mp) difference
//heal-hero,amount hp(max100) difference
//Print-hero,hp,mp
//}
