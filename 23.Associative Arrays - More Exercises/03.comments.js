function comments(input) {
  let articles = {};
  let users = [];

  for (let line of input) {
    if (line.includes("user")) {
      let [empty, username] = line.split("user ");
      users.push(username);
    } else if (line.includes("article")) {
      let [empty, article] = line.split("article ");
      articles[article] = [];
      articles[article].push(0);
    } else if (line.includes("posts")) {
      let [user, post] = line.split(" posts on ");
      if (users.includes(user)) {
        let [article, commentPair] = post.split(": ");
        if (articles.hasOwnProperty(article)) {
          let [title, comment] = commentPair.split(", ");
          articles[article].push([user, title, comment]);
          articles[article][0]++;
        }
      }
    }
  }

  let sortedArticles = Object.entries(articles);
  sortedArticles.sort((a, b) => {
    if (b[1][0] - a[1][0] === 0) {
      return a[0].localeCompare(b[0]);
    }
    return b[1][0] - a[1][0];
  });

  for (let article of sortedArticles) {
    console.log("Comments on " + article[0]);
    let sortedUsers = article[1];
    sortedUsers.shift();
    sortedUsers.sort((a, b) => {
      if (a[0].localeCompare(b[0]) === 0) {
        return a[0] - b[0];
      }
      return a[0].localeCompare(b[0]);
    });

    for (let user of sortedUsers) {
      console.log(`--- From user ${user[0]}: ${user[1]} - ${user[2]}`);
    }
  }
}

comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
