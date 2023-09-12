function coffeeLover(arr) {
  let coffeeList = arr.shift().split(" ");
  let commandsCount = Number(arr.shift());

  for (let i = 0; i < commandsCount; i++) {
    let tokens = arr[i].split(" ");
    let command = tokens[0];

    switch (command) {
      case "Include":
        coffeeList.push(tokens[1]);
        break;
      case "Remove":
        if (Number(tokens[2]) < coffeeList.length) {
          if (tokens[1] === "first") {
            coffeeList.splice(0, Number(tokens[2]));
          }
          if (tokens[1] === "last") {
            coffeeList.splice(-Number(tokens[2]));
          }
        }
        break;
      case "Prefer":
        indexOne = Number(tokens[1]);
        indexTwo = Number(tokens[2]);
        if (
          indexOne >= 0 &&
          indexTwo > indexOne &&
          indexTwo < coffeeList.length
        ) {
          let temp = coffeeList[indexOne];
          coffeeList[indexOne] = coffeeList[indexTwo];
          coffeeList[indexTwo] = temp;
        }
        break;
      case "Reverse":
        coffeeList.reverse();
        break;
    }
  }

  console.log(`Coffees:`);
  console.log(`${coffeeList.join(" ")}`);
}

coffeeLover([
  "Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
  "5",
  "Include OrdinaryCoffee",
  "Remove first 1",
  "Prefer 0 1",
  "Prefer 3 1",
  "Reverse",
]);
coffeeLover([
  "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
  "5",
  "Include TurkishCoffee",
  "Remove first 2",
  "Remove last 1",
  "Prefer 3 1",
  "Reverse",
]);
coffeeLover([
  "Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
  "3",
  "Include OrdinaryCoffee",
  "Remove first 1",
  "Prefer 4 1",
]);
