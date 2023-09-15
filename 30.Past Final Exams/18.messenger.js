function messages(input) {
    let list = {}
    let capacity = Number(input.shift());


    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Statistics") {
        let tokens = command.split('=');
        let action = tokens.shift();

        switch (action) {
            case 'Add':
                let user = tokens[0];
                let sentCount = Number(tokens[1])
                let recCount = Number(tokens[2]);
                if (!list.hasOwnProperty(user)) {
                    let total = capacity
                    total -= sentCount
                    total -= recCount
                    list[user] = [sentCount, recCount, total]
                }
                break;
            case 'Message':
                let userOne = tokens[0];
                let userTwo = tokens[1];
                if (list.hasOwnProperty(userOne) && list.hasOwnProperty(userTwo)) {
                    list[userOne][0]++;
                    list[userOne][2]--;
                    if (list[userOne][2] <= 0) {
                        console.log(`${userOne} reached the capacity!`)
                        delete list[userOne];
                    }

                    list[userTwo][1]++;
                    list[userTwo][2]--
                    if (list[userTwo][2] <= 0) {
                        console.log(`${userTwo} reached the capacity!`)
                        delete list[userTwo];
                    }
                }
                break;
            case 'Empty':
                let use = tokens[0];
                if (use === 'All') {
                    list = {}
                } else {
                    if (list.hasOwnProperty(use)) {
                        delete list[use]
                    }
                }
                break;
        }
        command = input[index];
        index++;
    }
    let arr = Object.entries(list);
    console.log(`Users count: ${arr.length}`);
    for (let person of arr) {
        let mesTotal = person[1][0] + person[1][1]
        console.log(`${person[0]} - ${mesTotal}`)
    }

}

messages(["20",

    "Add=Mark=3=9",

    "Add=Berry=5=5",

    "Add=Clark=4=0",

    "Empty=Berry",

    "Add=Blake=9=3",

    "Add=Michael=3=9",

    "Add=Amy=9=9",

    "Message=Blake=Amy",

    "Message=Michael=Amy",

    "Statistics"])

// /*
// capacity total per user
// 3 commands-Statistics

// list={
//     username:[sent,received]
// }

// add=>username:sent num,received num
// if username ignore

// message=>sender,receiver
// if(sender&&receiver)++ both
// if over capacty sender first remove username print 'username reached...'

// empty=>username
// if username===all delete all records
// if username exists delete it

// print total users
// print each user + sent and received

// username, sent mes, received mes//*