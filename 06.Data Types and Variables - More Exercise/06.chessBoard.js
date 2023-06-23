function chessBoard(n) {
  console.log('<div class="chessboard">');

  for (let i = 1; i <= n; i++) {
    console.log(" <div>");
    for (let j = 1; j <= n; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          console.log('  <span class="black"></span>');
        } else {
          console.log('  <span class="white"></span>');
        }
      } else {
        if (j % 2 === 0) {
          console.log('  <span class="white"></span>');
        } else {
          console.log('  <span class="black"></span>');
        }
      }
    }
    console.log(" </div>");
  }
  console.log("</div>");
}
chessBoard(6);
