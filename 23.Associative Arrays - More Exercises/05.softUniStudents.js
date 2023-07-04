function softUniStudents(input) {
  let courses = [];

  for (let line of input) {
    if (line.includes(":")) {
      let [name, placesLeft] = line.split(": ");
      let exists = courses.find((obj) => obj["name"] === name);
      if (exists) {
        exists["placesLeft"] += Number(placesLeft);
      } else {
        let tempCourse = {
          name: name,
          placesLeft: Number(placesLeft),
          studentsCount: 0,
          students: [],
        };
        courses.push(tempCourse);
      }
    } else if (line.includes("joins")) {
      let [credentials, course] = line.split(" joins ");
      let courseExists = courses.find((obj) => obj["name"] === course);
      if (courseExists && courseExists["placesLeft"] > 0) {
        let [userPair, email] = credentials.split("] with email ");
        let [username, credits] = userPair.split("[");
        let tempStudent = [username, email, Number(credits)];
        courseExists["students"].push(tempStudent);
        courseExists["placesLeft"]--;
        courseExists["studentsCount"]++;
      }
    }
  }

  courses.sort((a, b) => b["studentsCount"] - a["studentsCount"]);
  for (let course of courses) {
    console.log(`${course["name"]}: ${course["placesLeft"]} places left`);
    for (let student of course["students"]) {
    }
    course["students"].sort((a, b) => b[2] - a[2]);
    for (let student of course["students"]) {
      console.log(`--- ${student[2]}: ${student[0]}, ${student[1]}`);
    }
  }
}

softUniStudents([
  "JavaBasics: 2",
  "user1[25] withemail user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with emailuser2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
