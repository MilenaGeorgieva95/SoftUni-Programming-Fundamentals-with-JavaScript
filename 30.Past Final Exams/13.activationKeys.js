function activationKeys(input) {
    let key = input.shift();

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Generate") {
        let tokens = command.split('>>>');
        switch (tokens[0]) {
            case 'Contains':
                if (key.includes(tokens[1])) {
                    console.log(`${key} contains ${tokens[1]}`)
                } else {
                    console.log("Substring not found!")
                }
                break;
            case 'Flip':
                let startInd = Number(tokens[2]);
                let endInd = Number(tokens[3]);
                let replacement = ''
                let tempKey = ''
                if (tokens[1] === 'Upper') {
                    replacement = key.substring(startInd, endInd).toUpperCase();
                } else if (tokens[1] === 'Lower') {
                    replacement = key.substring(startInd, endInd).toLowerCase();
                }
                tempKey = key.substring(0, startInd) + replacement + key.substring(endInd);
                key = tempKey;
                console.log(key)
                break;
            case 'Slice':
                let startSlice = Number(tokens[1]);
                let endSlice = Number(tokens[2]);
                let newKey = key.substring(0, startSlice) + key.substring(endSlice);
                key = newKey;
                console.log(key);
                break;
        }


        command = input[index];
        index++;
    }
    console.log(`Your activation key is: ${key}`)
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])