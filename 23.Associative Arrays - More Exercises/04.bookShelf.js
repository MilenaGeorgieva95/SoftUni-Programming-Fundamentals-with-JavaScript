function bookShelf(input) {
  let shelves = [];

  for (let line of input) {
    if (line.includes("->")) {
      let [id, genre] = line.split(" -> ");
      let exists = shelves.find((el) => el.id === id);
      if (!exists) {
        let tempShelf = {
          id: id,
          genre: genre,
          booksCount: 0,
          books: [],
        };
        shelves.push(tempShelf);
      }
    } else if (line.includes(":")) {
      let [titlePair, genre] = line.split(", ");
      let shelfExists = shelves.find((obj) => obj["genre"] === genre);
      if (shelfExists) {
        let [title, author] = titlePair.split(": ");
        shelfExists["books"].push([title, author]);
        shelfExists["booksCount"]++;
      }
    }
  }
  shelves.sort((a, b) => b["booksCount"] - a["booksCount"]);

  for (let shelf of shelves) {
    shelf["books"].sort((a, b) => a[0].localeCompare(b[0]));
    console.log(`${shelf["id"]} ${shelf["genre"]}: ${shelf["booksCount"]}`);
    for (let book of shelf["books"]) {
      console.log(`--> ${book[0]}: ${book[1]}`);
    }
  }
}

bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);

//shelves[
//shelf{
//id:1
//genre:history,
//booksCount:0,
//books:[[title,author],[title,author],[title,author]]
//},
//shelf{
//
//}
//]
