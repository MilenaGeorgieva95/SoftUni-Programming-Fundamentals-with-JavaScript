function phoneBook(data) {
  let phoneBook = {};
  for (let el of data) {
    let [name, number] = el.split(" ");
    phoneBook[name] = number;
  }

  for (let key in phoneBook) {
    console.log(key + " -> " + phoneBook[key]);
  }

  //   for (let [key, value] of Object.entries(phoneBook)) {
  //     console.log(key + " -> " + value);
  //   }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
