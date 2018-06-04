function solveObj(arr) {
    let book = {};
    for (let arrElement of arr) {
        let tokens = arrElement.split(':').map(a => a.trim());
        let productName = tokens[0];
        let price = Number(tokens[1]);
        let firstLetter = productName[0];
        if (!book.hasOwnProperty(firstLetter)){
            book[firstLetter] = [];
        }
        book[firstLetter].push({productName, price});
    }

    for (let bookElement of Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(bookElement[0]);
        for (let innerElements of bookElement[1].sort((a, b) => a.productName.toLowerCase().localeCompare(b.productName.toLowerCase()))) {
            console.log(`  ${innerElements.productName}: ${innerElements.price}`);
        }
    }
}

function solveMap(arr) {
    let book = new Map();
    for (let arrElement of arr) {
        let tokens = arrElement.split(':').map(a => a.trim());
        let productName = tokens[0];
        let price = Number(tokens[1]);
        let firstLetter = productName[0];
        if (!book.has(firstLetter)){
            book.set(firstLetter, new Map());
        }
        book.get(firstLetter).set(productName, price);
    }

    for (let bookElement of [...book].sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(bookElement[0]);
        for (let innerElements of [...bookElement[1]].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))) {
            console.log(`  ${innerElements[0]}: ${innerElements[1]}`);
        }
    }
}
solveMap([`Appricot : 20.4`,
`Fridge : 1500`,
`TV : 1499`,
`Deodorant : 10`,
`Boiler : 300`,
`Apple : 1.25`,
`Anti-Bug Spray : 15`,
`T-Shirt : 10`]);