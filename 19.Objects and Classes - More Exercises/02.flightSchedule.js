function flightSchedule(input) {
  let flights = input[0];
  let changes = input[1];
  let flightStatus = input[2];
  let flightsRegister = [];

  for (let line of flights) {
    let [serialNum, destination] = line.split(" ");
    let tempObj = {
      serialNum: serialNum,
      destination: destination,
      status: "Ready to fly",
    };
    flightsRegister.push(tempObj);
  }

  for (let line of changes) {
    let [serialNum, status] = line.split(" ");

    let flight = flightsRegister.find((obj) => obj.serialNum === serialNum);

    if (flight) {
      flight.status = status;
    }
  }

  for (let flightObj of flightsRegister) {
    if (flightObj.status == flightStatus[0]) {
      console.log(
        `{ Destination: '${flightObj.destination}', Status: '${flightObj.status}' }`
      );
    }
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
