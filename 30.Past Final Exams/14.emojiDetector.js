function emojiDetector(input) {
    let text = input[0];
    let emojiPattern = /([:*]){2}[A-Z][a-z][a-z]+\1{2}/g;
    let numsPattern = /\d/g;

    let coolTreshold = 1;

    let numsArr = text.match(numsPattern);
    numsArr.forEach(el => { coolTreshold *= Number(el) });
    console.log(`Cool threshold: ${coolTreshold}`)

    let emojisArr = []

    let matches = text.match(emojiPattern);
    if (matches) {
        for (let emoji of matches) {
            let coolness = 0;
            for (let i = 2; i < emoji.length - 2; i++) {

                let charCode = emoji.charCodeAt(i);
                coolness += charCode;
            }
            emojisArr.push([emoji, coolness]);
        }
    }

    console.log(`${emojisArr.length} emojis found in the text. The cool ones are:`);

    let coolEmojisArr = emojisArr.filter(el => el[1] >= coolTreshold);
    if (coolEmojisArr.length > 0) {
        coolEmojisArr.forEach(el => console.log(el[0]))
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])