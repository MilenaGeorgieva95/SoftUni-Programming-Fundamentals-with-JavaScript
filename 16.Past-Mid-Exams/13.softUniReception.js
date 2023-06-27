function softUniReceprion(input) {
  let arr = input.map(Number);
  let studentsCount = arr.pop();
  let studentsPerHour = 0;
  arr.forEach((el) => (studentsPerHour += el));
  let hours = 0;

  while (studentsCount > 0) {
    hours++;
    studentsCount -= studentsPerHour;
    if (hours % 4 === 0) {
      hours++;
    }
  }

  console.log(`Time needed: ${hours}h.`);
}

softUniReceprion(["1", "2", "3", "45"]);
