function personInfo(firstName, lastName, age) {
  let result = {
    firstName,
    lastName,
    age,
  };
  //   result.firstName = firstName;
  //   result.lastName = lastName;
  //   result.age = age;
  return result;
}

console.log(personInfo("Peter", "Pan", "20"));
