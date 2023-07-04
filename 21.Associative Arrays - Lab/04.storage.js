function storage(data) {
  let storage = new Map();

  for (let line of data) {
    let [product, qty] = line.split(" ");
    qty = Number(qty);
    if (storage.has(product)) {
      storage.set(product, storage.get(product) + qty);
      continue;
    }
    storage.set(product, qty);
  }

  for (let [key, value] of storage.entries()) {
    console.log(key + " -> " + value);
  }
}

storage(["tomatoes 10", "tomatoes 20", "coffee 5", "olives 100", "coffee 40"]);
