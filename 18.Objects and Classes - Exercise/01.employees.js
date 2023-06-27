//deep copy:
//let obj2=JSON.parse(JSON.stringify(obj))

//delete obj.name

//obj.hasOwnProperty("name") => contains name key=>true or false

function employees(namesArray) {
  let obj = {};

  for (const el of namesArray) {
    obj[el] = el.length;
  }
  for (const fullName in obj) {
    console.log(`Name: ${fullName} -- Personal Number: ${obj[fullName]}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
