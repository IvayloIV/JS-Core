function solve(arr) {
    let book = new Map();
    for (let element of arr) {
        let [town, product, amount, price] = element.split(/ -> | : /).filter(a => a !== '');
        if (!book.has(town)){
            book.set(town, new Map());
        }
        book.get(town).set(product, Number(amount) * Number(price));
    }
    for (let element of [...book]) {
        console.log(`Town - ${element[0]}`);
        for (let innerElement of [...element[1]]) {
            console.log(`$$$${innerElement[0]} : ${innerElement[1]}`);
        }
    }
}

solve([`Sofia -> Laptops HP -> 200 : 2000`,
`Sofia -> Raspberry -> 200000 : 1500`,
`Sofia -> Audi Q7 -> 200 : 100000`,
`Montana -> Portokals -> 200000 : 1`,
`Montana -> Qgodas -> 20000 : 0.2`,
`Montana -> Chereshas -> 1000 : 0.3`]);