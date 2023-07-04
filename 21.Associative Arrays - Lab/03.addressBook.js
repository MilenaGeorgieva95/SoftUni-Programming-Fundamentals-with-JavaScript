function addressBook(input) {
  let book = {};

  for (let el of input) {
    let [name, address] = el.split(":");
    book[name] = address;
  }

  let sortedBook = Object.entries(book).sort(([keyA, valueA], [keyB, valueB]) =>
    keyA.localeCompare(keyB)
  );

  //   let sortedBook = Object.entries(book).sort(([keyA, valueA], [keyB, valueB]) => {
  //       if (keyA.localeCompare(keyB) === 0) {
  //         return valueA.localeCompare(valueB);
  //       }
  //       return keyA.localeCompare(keyB);
  //     }
  //   );

  for (let [key, value] of sortedBook) {
    console.log(key + " -> " + book[key]);
  }
}

addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
