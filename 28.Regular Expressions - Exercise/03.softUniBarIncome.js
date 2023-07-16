function softUniBarIncome(input) {
  let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d.]+)\$/g;

  let totalIncome = 0;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "end of shift") {
    let matches = command.matchAll(pattern);
    for (let match of matches) {
      let customer = match.groups.customer;
      let product = match.groups.product;
      let count = match.groups.count;
      let price = match.groups.price;

      if (customer && product && count && price) {
        let totalPrice = 0;
        totalPrice += Number(count) * Number(price);
        totalIncome += totalPrice;
        console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
      }
    }

    command = input[index];
    index++;
  }

  console.log("Total income: " + totalIncome.toFixed(2));
}

softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
