function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armourPrice
) {
  let repairSum = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      repairSum += helmetPrice;
    }
    if (i % 3 === 0) {
      repairSum += swordPrice;
    }
    if (i % 6 === 0) {
      repairSum += shieldPrice;
    }
    if (i % 12 === 0) {
      repairSum += armourPrice;
    }
  }

  console.log(`Gladiator expenses: ${repairSum.toFixed(2)} aureus`);
}
