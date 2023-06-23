function bombNumbers(sequence, bombNums) {
  let [specialNum, bombedCount] = bombNums;

  while (sequence.includes(specialNum)) {
    let index = sequence.indexOf(specialNum);
    let toRemove = 0;
    if (index < bombedCount) {
      toRemove = index + 1 + bombedCount;
      sequence.splice(0, toRemove);
    } else if (index + bombedCount > sequence.length) {
      toRemove = sequence.length - index + 1 + bombedCount;
      sequence.splice(-toRemove);
    } else {
      toRemove = bombedCount * 2 + 1;
      sequence.splice(index - bombedCount, toRemove);
    }
  }

  let sum = 0;
  sequence.forEach((el) => (sum += el));
  console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1], [2, 3]);
