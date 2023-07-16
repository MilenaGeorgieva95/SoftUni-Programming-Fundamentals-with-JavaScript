function furniture(input) {
  let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>[\d\.]+)!(?<qty>\d+)\b/g;
  let text = input.join(" ");

  let matches = text.matchAll(pattern);
  let names = [];
  let totalSum = 0;

  for (let match of matches) {
    let name = match.groups.name;
    names.push(name);
    let price = Number(match.groups.price);
    let qty = Number(match.groups.qty);
    let sum = price * qty;
    totalSum += sum;
  }

  console.log("Bought furniture:");
  if (names.length > 0) {
    console.log(names.join("\n"));
  }
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
