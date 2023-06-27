function shoppingList(arr) {
  let list = arr.shift().split("!");

  let index = 0;
  let command = arr[index];
  index++;

  while (command !== "Go Shopping!") {
    let tokens = command.split(" ");
    let action = tokens[0];
    let product = tokens[1];

    switch (action) {
      case "Urgent":
        if (list.indexOf(product) === -1) {
          list.unshift(product);
        }
        break;
      case "Unnecessary":
        if (list.indexOf(product) > -1) {
          let index = list.indexOf(product);
          list.splice(index, 1);
        }
        break;
      case "Correct":
        let newProduct = tokens[2];
        let index = list.indexOf(product);
        if (index > -1) {
          list.splice(index, 1, newProduct);
        }
        break;
      case "Rearrange":
        if (list.indexOf(product) > -1) {
          let index = list.indexOf(product);
          let item = list.splice(index, 1);
          list.push(item[0]);
        }
        break;
    }
    command = arr[index];
    index++;
  }
  console.log(list.join(", "));
}

shoppingList([
  "Milk!Pepper!Salt!Water!Banana!Grapes",
  "Urgent Salt",
  //   "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
