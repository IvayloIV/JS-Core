function solve(arr) {
    let book = new Map();
    for (let arrElement of arr) {
        let [townName, productName, productPrice] = arrElement.split('|').map(a => a.trim()).filter(a => a !== '');
        if (!book.has(productName)){
            book.set(productName, new Map());
        }
        book.get(productName).set(townName, Number(productPrice));
    }

    for (let element of [...book]) {
        let sortedTowns = Array.from(element[1].keys()).sort((a, b) => element[1].get(a) - element[1].get(b));
        console.log(`${element[0]} -> ${element[1].get(sortedTowns[0])} (${sortedTowns[0]})`);
    }
}

solve([`Sample Town | Sample Product | 1000`,
`Sample Town | Orange | 2`,
`Sample Town | Peach | 1`,
`Sofia | Orange | 3`,
`Sofia | Peach | 2`,
`New York | Sample Product | 1000.1`,
`New York | Burger | 10`]);