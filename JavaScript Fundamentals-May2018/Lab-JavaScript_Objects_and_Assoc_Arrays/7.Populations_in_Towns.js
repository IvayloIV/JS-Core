function solve(arr) {
    let book = new Map();
    for (let element of arr) {
        let [townName, population] = element.split(/\s*<->\s*/).filter(a => a !== '');
        if (!book.has(townName)){
            book.set(townName , 0);
        }
        book.set(townName, book.get(townName) + Number(population));
    }

    for (let key of book.keys()) {
        console.log(`${key} : ${book.get(key)}`);
    }
}

solve([`Sofia <-> 1200000`,
`Montana <-> 20000`,
`New York <-> 10000000`,
`Washington <-> 2345000`,
`Las Vegas <-> 1000000`]);