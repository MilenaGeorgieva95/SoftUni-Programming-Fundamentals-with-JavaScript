function easter(input) {
    let str = input[0];
    let pattern = /[@|#]+(?<color>[a-z]{3,})[@#]+[^A-Za-z0-9]*\/+(?<qty>[\d]+)\/+/g;

    let matches = str.matchAll(pattern)

    if (matches) {
        for (let match of matches) {
            let amount = match.groups.qty
            let color = match.groups.color
            console.log(`You found ${amount} ${color} eggs!`)
        }
    }

}

easter(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])