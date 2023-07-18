function needForSpeed(input) {
  let carsCount = Number(input.shift());
  let carsList = [];

  let index = 0;
  let command = input[index];
  index++;
  let counter = 0;

  while (command !== "Stop") {
    counter++;
    if (counter <= carsCount) {
      let [brand, mileage, fuel] = command.split("|");
      let tempCar = {
        brand: brand,
        mileage: Number(mileage),
        fuel: Number(fuel),
      };
      carsList.push(tempCar);
    } else {
      let tokens = command.split(" : ");

      switch (tokens[0]) {
        case "Drive":
          let drivenCar = carsList.find((obj) => obj["brand"] === tokens[1]);
          if (drivenCar["fuel"] >= Number(tokens[3])) {
            drivenCar["fuel"] -= Number(tokens[3]);
            drivenCar["mileage"] += Number(tokens[2]);
            console.log(
              `${drivenCar["brand"]} driven for ${tokens[2]} kilometers. ${tokens[3]} liters of fuel consumed.`
            );
          } else {
            console.log(`Not enough fuel to make that ride`);
          }
          if (drivenCar.mileage >= 100000) {
            console.log(`Time to sell the ${drivenCar.brand}!`);
            let soldCarIndex = carsList.indexOf(drivenCar);
            carsList.splice(soldCarIndex, 1);
          }
          break;
        case "Refuel":
          let filledCar = carsList.find((obj) => obj["brand"] === tokens[1]);
          let spaceToFill = 75 - filledCar["fuel"];
          let fuelTaken = 0;
          if (spaceToFill >= Number(tokens[2])) {
            fuelTaken = Number(tokens[2]);
            filledCar["fuel"] += Number(tokens[2]);
            console.log(
              `${filledCar["brand"]} refueled with ${fuelTaken} liters`
            );
          } else {
            fuelTaken = spaceToFill;
            filledCar["fuel"] = 75;
            console.log(
              `${filledCar["brand"]} refueled with ${fuelTaken} liters`
            );
          }
          break;
        case "Revert":
          let revertedCar = carsList.find((obj) => obj.brand === tokens[1]);
          if (revertedCar) {
            revertedCar.mileage -= Number(tokens[2]);
            if (revertedCar.mileage < 10000) {
              revertedCar.mileage = 10000;
            } else {
              console.log(
                `${revertedCar.brand} mileage decreased by ${tokens[2]} kilometers`
              );
            }
          }
      }
    }

    command = input[index];
    index++;
  }
  for (let car of carsList) {
    console.log(
      `${car.brand} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`
    );
  }
}

needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
