function lowestPrice(arr) {
    let book = new Map();

    for (let current of arr) {
        let townTokens = current.split(" | ");
        let town = townTokens[0];
        let product = townTokens[1];
        let price = Number(townTokens[2]);

        if (!book.has(product)) {
            book.set(product, new Map());
        }
        book.get(product).set(town, Number(price));
    }
    for (let [product, towns] of book) {
        let sum = [...towns].reduce(function (a, b) {
            if (a[1] <= b[1]) {
                return a;
            }
            return b;
        });
        console.log(`${product} -> ${sum[1]} (${sum[0]})`);
    }
}
lowestPrice([`Sofia City | Audi | 100000`,
    `Sofia City | BMW | 100000`,
    `Sofia City | Mitsubishi | 10000`,
    `Sofia City | Mercedes | 10000`,
    `Sofia City | NoOffenseToCarLovers | 0`,
    `Mexico City | Audi | 1000`,
    `Mexico City | BMW | 99999`,
    `New York City | Mitsubishi | 10000`,
    `New York City | Mitsubishi | 1000`,
    `Mexico City | Audi | 100000`,
    `Washington City | Mercedes | 1000`]);