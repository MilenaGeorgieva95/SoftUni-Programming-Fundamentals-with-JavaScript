function fancyBarcodes(input) {
    let barcodesCount = Number(input.shift());
    let pattern = /^@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+$/
    let numsPattern = /\d/g;

    for (let i = 0; i < barcodesCount; i++) {
        let productGroup = '00'
        let barcode = input[i];
        let match = barcode.match(pattern);
        if (match) {
            let nums = barcode.match(numsPattern);
            if (nums) {
                productGroup = nums.join('');

            }
            console.log(`Product group: ${productGroup}`)
        } else {
            console.log("Invalid barcode")
        }
    }

}

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])