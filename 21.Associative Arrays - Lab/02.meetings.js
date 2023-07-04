function meetings(input) {
  let calendar = {};

  for (let line of input) {
    let [day, person] = line.split(" ");
    if (calendar.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ` + day);
      calendar[day] = person;
    }
  }

  //to sort object with Object.entries:

  //let sortedArr=Object.entries(calendar).sort((a,b)=>a[0].localeCompare(b[0]))

  //   let sortedArr = Object.keys(calendar);
  //   sortedArr.sort((a, b) => a.localeCompare(b));

  //let sortedArr=Object.entries(calendar).sort(([keyA,valueA],[keyB,valueB]))=>keyA.localeCompare(keyB))

  //let sortedArr=Object.entries(calendar).filter(a=>a[0].length<7)

  for (let key of sortedArr) {
    console.log(key + " -> " + calendar[key]);
  }

  //   for (key in calendar) {
  //     console.log(key + " -> " + calendar[key]);
  //   }

  //for (let [key, value] of Object.entries(calendar)){
  //console.log(key + " -> " + value);}
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
