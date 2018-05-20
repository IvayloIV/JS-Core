function cityMarketsMap(arr) {
    let book = new Map();

    for (let currentTown of arr) {
        let townTokens = currentTown.split(" -> ");
        let priceTokens = townTokens[2].split(" : ");
        let town = townTokens[0];
        let product = townTokens[1];
        let amountOfSales = priceTokens[0];
        let priceForOneUnit = priceTokens[1];

        let totalIncome = amountOfSales * priceForOneUnit;

        if (!book.has(town)) {
            book.set(town, new Map());
        }
        let oldIncome = book.get(town).get(product);
        if (oldIncome) {
            totalIncome += oldIncome;
        }
        book.set(town, book.get(town).set(product, totalIncome));
    }
    for (let [town, townTokens] of book) {
        console.log(`Town - ${town}`);
        for (let [product, sum] of townTokens) {
            console.log(`$$$${product} : ${sum}`);
        }
    }
}

function cityMarketsObj(arr) {
    let book = {};

    for (let currentTown of arr) {
        let townTokens = currentTown.split(" -> ");
        let priceTokens = townTokens[2].split(" : ");
        let town = townTokens[0];
        let product = townTokens[1];
        let amountOfSales = priceTokens[0];
        let priceForOneUnit = priceTokens[1];

        let totalIncome = amountOfSales * priceForOneUnit;

        if (!book.hasOwnProperty(town)) {
            book[town] = {};
        }
        let oldIncome = book[town][product];
        if (oldIncome) {
            totalIncome += oldIncome;
        }
        book[town][product] = totalIncome;
    }
    for (let toowns of Object.keys(book)) {
        console.log(`Town - ${toowns}`);
        for (let prooduct of Object.keys(book[toowns])) {
            console.log(`$$$${prooduct} : ${book[toowns][prooduct]}`);
        }
    }

    console.log(JSON.stringify(book));
}
cityMarketsObj([`Sofia -> Laptops HP -> 200 : 2000`,
    `Sofia -> Laptops HP -> 200000 : 1500`,
    `Sofia -> Audi Q7 -> 200 : 100000`,
    `Montana -> Portokals -> 200000 : 1`,
    `Montana -> Qgodas -> 20000 : 0.2`,
`Montana -> Chereshas -> 1000 : 0.3`]);