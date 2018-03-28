function solve(arr) {
    arr = arr.filter(a => a !== '');
    let countWhite = 1;
    let countBlack = 1;
    let lastWhite = -1;
    let lastBlack = -1;

    let whiteSum = 0;
    let blackSum = 0;
    for (let element of arr) {
        let tokens = element.split(' ').map(a => a.trim()).filter(a => a !== '');
        let n = Number(tokens[0]);
        let type = tokens[1];
        if (type === 'white') {
            if (n === lastWhite) {
                countWhite++;
            } else {
                lastWhite = n;
                countWhite = 1;
            }
            if (countWhite === 2){
                whiteSum += (n * 60 * 2.75);
                countWhite = 0;
            } else {
                whiteSum += (60 * n);
            }
        } else if (type === "dark"){
            if (n === lastBlack) {
                countBlack++;
            } else {
                lastBlack = n;
                countBlack = 1;
            }
            if (countBlack === 5){
                blackSum += (n * 60 * 4.5);
                countBlack = 0;
            } else {
                blackSum += (60 * n);
            }
        }
    }

    if (whiteSum > blackSum){
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${whiteSum}`);
    } else if (whiteSum < blackSum){
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${blackSum}`);
    }
}
solve([`2 dark medenkas`,
`1 white medenkas`,
`2 dark medenkas`,
`2 dark medenkas`,
`15 white medenkas`,
`15 white medenkas`,
`2 dark medenkas`]);