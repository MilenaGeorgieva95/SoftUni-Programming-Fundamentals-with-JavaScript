function schoolRegister(input) {
  let register = [];
  for (student of input) {
    let [studentName, grade, averageScore] = student.split(", ");
    let [nameKey, nameValue] = studentName.split(": ");
    let [gradeKey, gradeValue] = grade.split(": ");
    let [averageScoreKey, averageScoreValue] = averageScore.split(": ");

    let tempObj = {
      name: nameValue,
      grade: Number(gradeValue),
      averageScore: Number(averageScoreValue),
    };

    if (tempObj.averageScore >= 3) {
      tempObj.grade += 1;
      register.push(tempObj);
    }
  }
  register.sort((a, b) => a.grade - b.grade);

  let section = register[0].grade;
  let result = [];
  let averageGrade = 0;
  let names = [];
  let tempObj = {};
  let average = 0;

  for (student of register) {
    if (student.grade === section) {
      names.push(student.name);
      averageGrade += student.averageScore;

      if (student.name === register[register.length - 1].name) {
        average = averageGrade / names.length;
        tempObj = {
          section: section,
          names: names,
          average: average,
        };
        result.push(tempObj);
      }
      continue;
    }

    average = averageGrade / names.length;
    tempObj = {
      section: section,
      names: names,
      average: average,
    };
    result.push(tempObj);

    section = student.grade;
    average = 0;
    names = [];
    averageGrade = 0;
    averageGrade += student.averageScore;
    names.push(student.name);

    if (student.name === register[register.length - 1].name) {
      average = averageGrade / names.length;
      tempObj = {
        section: section,
        names: names,
        average: average,
      };

      result.push(tempObj);
    }
  }

  for (let gradeSection of result) {
    console.log(gradeSection.section + " Grade");
    console.log("List of students: " + gradeSection.names.join(", "));
    console.log(
      "Average annual score from last year: " + gradeSection.average.toFixed(2)
    );
    console.log();
  }
}

schoolRegister([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
