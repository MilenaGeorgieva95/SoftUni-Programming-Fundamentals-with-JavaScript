function storeProvision(arrOne, arrTwo) {
  let localStoreStorage = {};

  for (let i = 0; i < arrOne.length; i += 2) {
    let product = arrOne[i];
    let qty = Number(arrOne[i + 1]);

    localStoreStorage[product] = qty;
  }

  for (let j = 0; j < arrTwo.length; j += 2) {
    let product = arrTwo[j];
    let quantity = Number(arrTwo[j + 1]);

    if (!localStoreStorage.hasOwnProperty(product)) {
      localStoreStorage[product] = 0;
    }
    localStoreStorage[product] += quantity;
  }

  for (const productKey in localStoreStorage) {
    console.log(`${productKey} -> ${localStoreStorage[productKey]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
