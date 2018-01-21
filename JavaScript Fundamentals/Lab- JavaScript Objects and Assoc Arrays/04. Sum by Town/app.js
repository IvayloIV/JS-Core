function sumByTownMap(arr) {
    let book = new Map();

    for (var i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let population = Number(arr[i + 1]);

        if (!book.has(name)) {
           book.set(name, 0);
        }
       book.set(name, book.get(name) + population);
    }

    for (let [key, value] of book) {
        console.log(`${key} => ${value}`);
    }
}

function sumByTownObj(arr) {
    let book = {};

    for (var i = 0; i < arr.length; i += 2) {
        let name = arr[i];
        let population = Number(arr[i + 1]);

        if (!book.hasOwnProperty(name)) {
            book[name] = 0;
        }
        book[name] += population;
    }

    console.log(JSON.stringify(book));
}
sumByTownObj([
`Sofia`,
`20`,
`Varna`,
`3`,
`Sofia`,
`5`,
`Varna`,
`4`
]);