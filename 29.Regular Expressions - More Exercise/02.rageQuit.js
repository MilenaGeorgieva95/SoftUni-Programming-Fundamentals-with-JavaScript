function rageQuit(input) {
  let text = input[0].toUpperCase();
  let textPattern = /(?<str>[^0-9]+)(?<count>[0-9]+)/g;
  let matches = text.matchAll(textPattern);
  let message = "";

  if (matches) {
    for (let match of matches) {
      message += match.groups.str.repeat(Number(match.groups.count));
    }
  }

  let uniqueSymbols = new Set(message.split(""));
  console.log(`Unique symbols used: ${uniqueSymbols.size}`);
  console.log(message);
}

rageQuit(["aSd2&5s@1"]);
