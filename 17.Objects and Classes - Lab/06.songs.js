function songs(arr) {
  let n = Number(arr.shift());
  let typeList = arr.pop();
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
    printTitle() {
      console.log(this.name);
    }
  }

  for (let song of arr) {
    let [type, name, time] = song.split("_");
    if (type === typeList || typeList === "all") {
      let tempSong = new Song(type, name, time);
      tempSong.printTitle();
    }
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
