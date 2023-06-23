function vacation(peopleCount, groupType, day) {
  let price = 0;
  if (groupType === "Students") {
    switch (day) {
      case "Friday":
        price = 8.45;
        break;
      case "Saturday":
        price = 9.8;
        break;
      case "Sunday":
        price = 10.46;
        break;
    }
  } else if (groupType === "Business") {
    switch (day) {
      case "Friday":
        price = 10.9;
        break;
      case "Saturday":
        price = 15.6;
        break;
      case "Sunday":
        price = 16;
        break;
    }
    if (peopleCount >= 100) {
      peopleCount -= 10;
    }
  } else if (groupType === "Regular") {
    switch (day) {
      case "Friday":
        price = 15;
        break;
      case "Saturday":
        price = 20;
        break;
      case "Sunday":
        price = 22.5;
        break;
    }
  }
  let totalPrice = peopleCount * price;
  if (groupType === "Students" && peopleCount >= 30) {
    totalPrice *= 0.85;
  }
  if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
    totalPrice *= 0.95;
  }
  console.log("Total price: " + totalPrice.toFixed(2));
}
