function radioCrystals(arr) {
  let index = 0;
  let goalThickness = arr[index];
  index++;
  let crystal = arr[index];
  index++;

  while (crystal) {
    let thickness = Number(crystal);
    console.log(`Processing chunk ${thickness} microns`);
    let counter = 0;
    let xray = false;

    while (thickness / 4 >= goalThickness) {
      counter++;
      thickness /= 4;
    }
    if (counter > 0) {
      console.log(`Cut x${counter}`);
      thickness = Math.floor(thickness);
      console.log("Transporting and washing");
    }
    counter = 0;

    while (thickness * 0.8 >= goalThickness) {
      counter++;
      thickness *= 0.8;
    }
    if (counter > 0) {
      console.log(`Lap x${counter}`);
      thickness = Math.floor(thickness);
      console.log("Transporting and washing");
    }
    counter = 0;

    while (thickness - 20 >= goalThickness) {
      counter++;
      thickness -= 20;
    }
    if (counter > 0) {
      console.log(`Grind x${counter}`);
      thickness = Math.floor(thickness);
      console.log("Transporting and washing");
    }
    counter = 0;

    if (goalThickness % 2 !== 0) {
      thickness += 1;
      xray = true;
    }
    while (thickness - 2 >= goalThickness) {
      counter++;
      thickness -= 2;
    }
    if (counter > 0) {
      console.log(`Etch x${counter}`);
      thickness = Math.floor(thickness);
      console.log("Transporting and washing");
    }
    counter = 0;

    if (xray) {
      console.log("X-ray x1");
    }
    console.log(`Finished crystal ${thickness} microns`);
    crystal = arr[index];
    index++;
  }
}

radioCrystals([1000, 4000, 8100]);
