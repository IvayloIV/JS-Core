function townPopulationMap(arr) {
    let book = new Map();
    let regex = new RegExp("\\s<\\->\\s");
    for (let e of arr) {
        let townsTokens = e.split(regex).filter(a => a != '');
        let name = townsTokens[0];
        let population = Number(townsTokens[1]);

        if (!book.has(name)) {
            book.set(name, 0);
        }
        book.set(name, book.get(name) + population);
    }
    for (let [key, value] of book) {
        console.log(`${key} : ${value}`);
    }
}

function townPopulationObj(arr) {
    let book = {};
    let regex = new RegExp("\\s<\\->\\s");
    for (let e of arr) {
        let townsTokens = e.split(regex).filter(a => a != '');
        let name = townsTokens[0];
        let population = Number(townsTokens[1]);

        if (!book.hasOwnProperty(name)) {
            book[name] = 0;
        }
        book[name] += population;
    }
    for (let keys of Object.keys(book)) {
        console.log(`${keys} : ${book[keys]}`);
    }
}
townPopulationObj([`Sofia <-> 1200000`,
    `Montana <-> 20000`,
    `New York <-> 10000000`,
    `Washington <-> 2345000`,
`Las Vegas <-> 1000000`]);