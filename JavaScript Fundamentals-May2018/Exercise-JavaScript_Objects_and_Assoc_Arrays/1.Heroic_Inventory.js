function solve(arr) {
    let book = [];
    for (let element of arr) {
        let tokens = element.split(/\s*\/\s*/).filter(a => a !== '');
        book.push({
            name : tokens[0],
            level : Number(tokens[1]),
            items : tokens[2] === undefined ? [] : tokens[2].split(', ')
        });
    }
    console.log(JSON.stringify(book));
}

solve([`Isacc / 25`,
`Derek / 12 / BarrelVest, DestructionSword`,
`Hes / 1 / Desolator, Sentinel, Antara`]);