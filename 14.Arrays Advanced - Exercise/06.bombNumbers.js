function bombNumbers(sequence, bombNums) {
  let [specialNum, bombedCount] = bombNums;

  while (sequence.includes(specialNum)) {
    let index = sequence.indexOf(specialNum);
    if (index < bombedCount) {
      sequence.splice(0, index + 1);
      sequence.splice(0, bombedCount);
    } else if (index + bombedCount > sequence.length) {
      sequence.splice(index, sequence.length - index);
      sequence.splice(index - bombedCount, bombedCount);
    } else {
      sequence.splice(index - bombedCount, bombedCount * 2 + 1);
    }
  }

  let sum = 0;
  sequence.forEach((el) => (sum += el));
  console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1], [2, 3]);
