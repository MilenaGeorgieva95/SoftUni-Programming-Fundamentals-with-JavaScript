function hogwards(input) {
    let str = input.shift();
    let index = 0;
    let command = input[index];
    index++;



    while (command !== "Abracadabra") {
        if (command === "Abjuration") {
            str = str.toUpperCase(str);
            console.log(str);
        } else if (command === "Necromancy") {
            str = str.toLowerCase(str);
            console.log(str);
        } else if (command.includes("Illusion") || command.includes("Divination") || command.includes("Alteration")) {
            let tokens = command.split(' ');
            let spell = tokens.shift();
            if (spell === "Illusion") {
                let i = Number(tokens[0]);
                let letter = tokens[1];
                let arr = str.split('');
                if (i >= 0 && i < arr.length) {
                    arr.splice(i, 1, letter);
                    str = arr.join('');
                    console.log('Done!');
                } else {
                    console.log("The spell was too weak.")
                }
            } else if (spell === "Divination") {
                let firstSub = tokens[0];
                let secSub = tokens[1];
                if (str.includes(firstSub) && str && firstSub) {
                    let replArr = str.split(firstSub);
                    str = replArr.join(secSub);
                    console.log(str);
                }

            } else if (spell === "Alteration") {
                let removed = tokens[0];
                if (str.includes(removed)) {
                    let arrTwo = str.split(removed);
                    str = arrTwo.join('');
                    console.log(str);
                }
            }
        } else {
            console.log("The spell did not work!")
        }

        command = input[index];
        index++;
    }

}

hogwards((["A7ci0",

    "Illusion 1 c",

    "Illusion 4 o",

    "Abjuration",

    "Abracadabra"]))