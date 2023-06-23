function bitcoinMining(arr) {
  let goldLv = 67.51;
  let coinLv = 11949.16;
  let counter = 0;
  let isPurchased = false;
  let totalGold = 0;
  let totalMoney = 0;
  let dayPurchased = 0;
  let bitcoinPurchased = 0;

  for (let i = 0; i < 1000; i++) {
    let entrance = arr[i];
    if (entrance === undefined) {
      break;
    }
    counter++;
    if (counter % 3 === 0) {
      entrance *= 0.7;
    }

    totalMoney += entrance * goldLv;
    while (totalMoney >= coinLv) {
      if (!isPurchased) {
        dayPurchased = counter;
      }
      isPurchased = true;
      totalMoney -= coinLv;

      bitcoinPurchased++;
    }
  }
  console.log("Bought bitcoins: " + bitcoinPurchased);
  if (isPurchased) {
    console.log("Day of the first purchased bitcoin: " + dayPurchased);
  }
  console.log("Left money: " + totalMoney.toFixed(2) + " lv.");
}
