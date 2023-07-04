function aMinerTask(input) {
  let resources = {};

  for (let i = 0; i < input.length; i += 2) {
    let ore = input[i];
    let qty = Number(input[i + 1]);

    if (resources[ore]) {
      resources[ore] += qty;
    } else {
      resources[ore] = qty;
    }
  }

  for (let ore in resources) {
    console.log(ore + " -> " + resources[ore]);
  }
}

aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
