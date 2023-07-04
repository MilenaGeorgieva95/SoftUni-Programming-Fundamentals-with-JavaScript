function schoolGrades(data) {
  let register = {};

  for (let line of data) {
    let grades = line.split(" ");

    let student = grades.shift();

    if (register.hasOwnProperty(student)) {
      for (let num of grades) {
        register[student].push(num);
      }
      continue;
    }
    register[student] = grades;
  }

  let sortedArr = Object.entries(register);
  sortedArr.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

  for (let [student, grades] of sortedArr) {
    let averageGrade = 0;
    for (let grade of grades) {
      averageGrade += Number(grade);
    }
    averageGrade /= grades.length;
    console.log(`${student}: ${averageGrade.toFixed(2)}`);
  }
}

schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
