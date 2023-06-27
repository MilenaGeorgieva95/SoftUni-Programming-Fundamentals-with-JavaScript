function convertToJSON(name, lastName, hairColor) {
  let myObj = {
    name,
    lastName,
    hairColor,
  };

  let jsonObj = JSON.stringify(myObj);
  console.log(jsonObj);
}

convertToJSON("George", "Jones", "Brown");
