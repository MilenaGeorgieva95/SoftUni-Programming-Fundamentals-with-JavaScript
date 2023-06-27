function blackFlag(arr) {
  arr = arr.map(Number);
  let days = arr[0];
  let dailyPlunder = arr[1];
  let expectedPlunder = arr[2];

  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += dailyPlunder;
    if (i % 3 === 0) {
      totalPlunder += dailyPlunder * 0.5;
    }
    if (i % 5 === 0) {
      totalPlunder *= 0.7;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(
      `Collected only ${((totalPlunder / expectedPlunder) * 100).toFixed(
        2
      )}% of the plunder.`
    );
  }
}

blackFlag(["5", "40", "100"]);
