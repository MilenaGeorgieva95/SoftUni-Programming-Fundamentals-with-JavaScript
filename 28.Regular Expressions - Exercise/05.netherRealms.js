function netherRealms(text) {
  let splitPattern = /\s*\,\s*/g;
  let healthPattern = /[0-9+*\/.-]*/g;
  let baseDamageNumPattern = /[-]*[0-9]+\.*(?=[0-9]*)[0-9]*/g;

  let baseDamageOperatorsPattern = /[*\/]+/g;

  let deamonsArr = text.split(splitPattern).sort((a, b) => a.localeCompare(b));

  for (let deamon of deamonsArr) {
    let health = 0;

    let healthMatches = deamon.split(healthPattern).join("");
    if (healthMatches.length > 0) {
      for (let char of healthMatches) {
        let charCode = char.charCodeAt(0);
        health += charCode;
      }
    }

    let baseDamage = 0;

    let damageMatches = deamon.match(baseDamageNumPattern);
    if (damageMatches) {
      for (let match of damageMatches) {
        baseDamage += Number(match);
      }
    }
    let operatorsArr = deamon.match(baseDamageOperatorsPattern);
    if (operatorsArr) {
      let operatorsStr = operatorsArr.join("");
      for (let operator of operatorsStr) {
        switch (operator) {
          case "*":
            baseDamage *= 2;
            break;
          case "/":
            baseDamage /= 2;
            break;
        }
      }
    }

    console.log(
      `${deamon} - ${health} health, ${baseDamage.toFixed(2)} damage`
    );
  }
}

netherRealms("M3ph-0.5s-0.5t0.0**, M3ph1st0**, Azazel");

//health-ascii sum all chars except 0-9+_*/.
//base damage-(10/-10) */2 in order can be float
//deamons separated by ,0 space
//name can't contain blank space , has at least one char
//list alphabetic
