function listOfProducts(arr) {
  let orderedList = arr
    .sort()
    .map((a, i) => `${i + 1}.${a}`)
    .join("\n");

  return orderedList;
}

console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]));
