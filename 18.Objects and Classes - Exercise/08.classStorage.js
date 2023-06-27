class Storage {
  constructor(capacity) {
    (this.capacity = capacity), (this.storage = []), (this.totalCost = 0);
  }
  addProduct(product) {
    this.storage.push(product);
    this.totalCost = this.totalCost + product.price * product.quantity;
    this.capacity -= product.quantity;
  }
  getProducts() {
    let list = [];
    for (let el of this.storage) {
      list.push(JSON.stringify(el));
    }
    return list.join("\n");
  }

  totalCost() {
    return this.totalCost;
  }
}

let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
