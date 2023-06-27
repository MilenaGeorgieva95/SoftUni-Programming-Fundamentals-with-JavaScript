function catalogue(arr) {
  let resultArr = [];
  for (item of arr) {
    let [product, price] = item.split(" : ");
    let tempObject = {
      letter: product[0],
      product: product,
      price: price,
    };
    resultArr.push(tempObject);
  }
  resultArr.sort((a, b) => a.product.localeCompare(b.product));
  let printLetter = resultArr[0].letter;
  console.log(printLetter);
  for (let object of resultArr) {
    if (object.letter === printLetter) {
      console.log(`  ${object.product}: ${object.price}`);
    } else {
      printLetter = object.letter;
      console.log(printLetter);
      console.log(`  ${object.product}: ${object.price}`);
    }
  }
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
