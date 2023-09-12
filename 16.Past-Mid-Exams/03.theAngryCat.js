function three(priceRatings, entryIndex, cOrEtoBreak) {
  priceRatings = priceRatings.map(Number);
  let entryEl = priceRatings[entryIndex];
  let leftSum = 0;
  let rightSum = 0;

  switch (cOrEtoBreak) {
    case "cheap":
      for (let i = 0; i < entryIndex; i++) {
        if (priceRatings[i] < entryEl) {
          leftSum += priceRatings[i];
        }
      }
      for (let j = entryIndex + 1; j < priceRatings.length; j++) {
        if (priceRatings[j] < entryEl) {
          rightSum += priceRatings[j];
        }
      }
      break;
    case "expensive":
      for (let k = 0; k < entryIndex; k++) {
        if (priceRatings[k] >= entryEl) {
          leftSum += priceRatings[k];
        }
      }
      for (let l = entryIndex + 1; l < priceRatings.length; l++) {
        if (priceRatings[l] >= entryEl) {
          rightSum += priceRatings[l];
        }
      }
      break;
  }
  let position = "";
  if (rightSum > leftSum) {
    position = "Right";
    console.log(`${position} - ${rightSum}`);
  } else {
    position = "Left";
    console.log(`${position} - ${leftSum}`);
  }
}

three(
  [-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],

  7,

  "expensive"
);
