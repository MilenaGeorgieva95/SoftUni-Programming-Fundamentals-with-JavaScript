function travelTime(input) {
  let list = [];
  for (let line of input) {
    let [country, town, price] = line.split(" > ");
    let isListed = list.find(
      (el) => el.town === town && el.country === country
    );
    if (isListed && isListed.price > Number(price)) {
      isListed.price = Number(price);
    }
    if (!isListed) {
      let tempObj = {
        town: town,
        price: Number(price),
        country: country,
      };
      list.push(tempObj);
    }
  }
  let sortedList = list.sort((a, b) => {
    if (a.country.localeCompare(b.country) === 0) {
      return a.price - b.price;
    }
    return a.country.localeCompare(b.country);
  });

  let lines = "";
  let section = sortedList[0].country;

  for (let destination of sortedList) {
    if (destination.country !== section) {
      console.log(section + " -> " + lines);
      lines = `${destination.town} -> ${destination.price} `;
      section = destination.country;

      if (destination === sortedList[sortedList.length - 1]) {
        console.log(section + " -> " + lines);
      }
    } else {
      lines += `${destination.town} -> ${destination.price} `;
      if (destination === sortedList[sortedList.length - 1]) {
        console.log(section + " -> " + lines);
      }
    }
  }
}

travelTime([
  "Bulgaria > Sofia > 25000",
  "aaa > Sofia > 1",
  "aa > Orgrimar > 0",
  "Albania > Tirana > 25000",
  "zz > Aarna > 25010",
  "Bulgaria > Lukovit > 10",
]);
