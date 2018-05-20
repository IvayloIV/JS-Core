function storeCatalogue(arr) {
    let book = {};

    for (let e of arr) {
        let inputTokens = e.split(" : ").filter(a => a != '');
        let name = inputTokens[0];
        let result = Number(inputTokens[1]);

        book[name] = result;
    }
    let arrKeysSorted = Object.keys(book).sort(mySort);

    let letter = "";
    for (let key of arrKeysSorted) {
        if (letter != key[0]) {
            console.log(key[0]);
            letter = key[0];
        }
        console.log(`  ${key}: ${book[key]}`);
    }

    function mySort(a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    }
}

function storeCataligueMap(arr) {
    let book = new Map();

    for (let e of arr) {
        let inputTokens = e.split(" : ").filter(a => a != '');
        let name = inputTokens[0];
        let result = Number(inputTokens[1]);
        let firstL = name[0];

        if (!book.has(firstL)) {
            book.set(firstL, new Map());
        }
        book.get(firstL).set(name, result);
    }

    let sortedL = [...book].sort(mySort);
    for (let [g1, g2] of sortedL) {
        console.log(g1);
        for (let l of [...g2].sort(mySort)) {
            console.log(`  ${l[0]}: ${l[1]}`);
        }
    }

    function mySort(a, b) {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    }
}
storeCataligueMap([`Appricot : 20.4`,
    `Fridge : 1500`,
    `TV : 1499`,
    `Deodorant : 10`,
    `Boiler : 300`,
`Apple : 1.25`,
    `Anti-Bug Spray : 15`,
`T-Shirt : 10`]);