function winningTicket(input) {
  let splitPattern = /\s*,\s+/g;
  let ticketsArr = input.split(splitPattern);
  let charsPattern = /([@#$^])\1{5,9}/g;

  for (let ticket of ticketsArr) {
    if (ticket.length === 20) {
      let ticketStart = ticket.slice(0, 10);
      let ticketEnd = ticket.slice(10);

      let matchesStart = ticketStart.match(charsPattern);
      let matchesEnd = ticketEnd.match(charsPattern);

      if (matchesStart && matchesEnd) {
        if (
          matchesStart[0] === matchesEnd[0] &&
          matchesStart[0].length === 10
        ) {
          console.log(`ticket "${ticket}" - 10${matchesStart[0][0]} Jackpot!`);
        } else if (matchesStart[0] === matchesEnd[0]) {
          console.log(
            `ticket "${ticket}" - ${matchesStart[0].length}${matchesStart[0][0]}`
          );
        } else {
          let length = 0;
          if (matchesStart[0].includes(matchesEnd[0])) {
            length = matchesEnd[0].length;
          } else if (matchesEnd[0].includes(matchesStart[0])) {
            length = matchesStart[0].length;
          }

          if (length > 0) {
            console.log(`ticket "${ticket}" - ${length}${matchesStart[0][4]}`);
          } else {
            console.log(`ticket "${ticket}" - no match`);
          }
        }
      } else {
        console.log(`ticket "${ticket}" - no match`);
      }
    } else {
      console.log("invalid ticket");
    }
  }
}

winningTicket("Cash$$$$$$Ca$$$$$$sh");
