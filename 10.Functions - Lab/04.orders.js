function orders(drink, qty) {
  let price = 0;

  switch (drink) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2;
      break;
  }

  return (qty * price).toFixed(2);
}

console.log(orders("water", 5));
