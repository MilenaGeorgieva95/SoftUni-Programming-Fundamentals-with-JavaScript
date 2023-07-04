function garage(input) {
  let result = [];
  for (let line of input) {
    let carObj = {};
    let [parking, car] = line.split(" - ");
    let pairSpecifics = car.split(", ");
    for (let pair of pairSpecifics) {
      let [key, value] = pair.split(": ");
      carObj["parking"] = parking;
      carObj[key] = value;
    }
    result.push(carObj);
  }
  result.sort((a, b) => a.parking - b.parking);
  let garageNum = result[0].parking;
  console.log("Garage № " + Number(garageNum));

  for (let obj of result) {
    let tempCar = [];
    if (obj.parking === garageNum) {
      for (let key in obj) {
        if (key !== "parking") {
          let temp = `${key} - ${obj[key]}`;
          tempCar.push(temp);
        }
      }
      console.log(`--- ${tempCar.join(", ")}`);
    } else {
      garageNum = obj.parking;
      console.log("Garage № " + Number(garageNum));
      for (let key in obj) {
        if (key !== "parking") {
          let temp = `${key} - ${obj[key]}`;
          tempCar.push(temp);
        }
      }
      console.log(`--- ${tempCar.join(", ")}`);
    }
  }
}

garage([
  "1 - color: green, fuel type: petrol",
  "1 - color: dark red, manufacture: WV",
  "2 - fuel type: diesel",
  "2 - fuel type: diesel",
  "3 - color: dark blue, fuel type: petrol",
  "3 - color: dark blueB, fuel type: petrol",
  "13 - color: dark blueB, fuel type: petrol",
]);
