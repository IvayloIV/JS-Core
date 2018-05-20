function dna(n) {
    let letters = "ATCGTTAGGG";

    let length = letters.length;
    let index = -1;
    for (var i = 1; i <= n; i++) {
        index = increaseIndex(index, length);
        let firstSymvol = letters[index];
        index = increaseIndex(index, length);
        let secoundSymbol = letters[index];
        drawFigure(firstSymvol, secoundSymbol, i);
    }

    function drawFigure(firstSymvol, secoundSymbol, i) {
        if (i % 4 == 2 || i % 4 == 0) {
            console.log(`*${firstSymvol}--${secoundSymbol}*`);
        } else if (i % 4 == 3) {
            console.log(`${firstSymvol}----${secoundSymbol}`);
        } else {
            console.log(`**${firstSymvol}${secoundSymbol}**`);
        }
    }

    function increaseIndex(index, length) {
        index++;
        if (index > length - 1) {
            index = 0;
        }
        return index;
    }
}
dna(10);