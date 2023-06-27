function towns(arr) {
  for (const townInfo of arr) {
    let [townName, latitude, longitude] = townInfo.split(" | ");

    let currTown = {
      town: townName,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };

    console.log(currTown);
  }

  //   class Town {
  //     constructor(name, latitude, longitude) {
  //       (this.town = name), (this.latitude = Number(latitude).toFixed(2));
  //       this.longitude = Number(longitude).toFixed(2);
  //     }
  //   }

  //   for (let town of arr) {
  //     let [townName, latitude, longitude] = town.split(" | ");
  //     let curTown = new Town(townName, latitude, longitude);

  //     console.log(curTown);
  //   }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
