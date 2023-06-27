function guineaPig(input) {
  let qtys = input.map((el) => Number(el));

  let foodPerMonth = qtys[0] * 1000;
  let hayPerMonth = qtys[1] * 1000;
  let coverPerMonth = qtys[2] * 1000;
  let weigth = qtys[3] * 1000;

  let isFinished = function (qty) {
    if (qty <= 0) {
      return true;
    }
    return false;
  };
  let isFeedingOver = false;

  for (let i = 1; i <= 30; i++) {
    foodPerMonth -= 300;

    isFeedingOver = isFinished(foodPerMonth);
    if (isFeedingOver) {
      break;
    }

    if (i % 2 === 0) {
      hayPerMonth -= foodPerMonth * 0.05;
    }

    isFeedingOver = isFinished(hayPerMonth);
    if (isFeedingOver) {
      break;
    }
    if (i % 3 === 0) {
      coverPerMonth -= weigth / 3;
    }
    isFeedingOver = isFinished(coverPerMonth);
    if (isFeedingOver) {
      break;
    }
  }

  if (isFeedingOver) {
    console.log("Merry must go to the pet store!");
  } else {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(
        foodPerMonth / 1000
      ).toFixed(2)}, Hay: ${(hayPerMonth / 1000).toFixed(2)}, Cover: ${(
        coverPerMonth / 1000
      ).toFixed(2)}.`
    );
  }
}

guineaPig(["10", "5", "5.2", "1"]);
