function solve(arr) {
    let book = {};
    for (let element of arr) {
        let tokens = element.split('>').map(a => a.trim());
        let country = tokens[0];
        let town = tokens[1].substring(0, 1).toUpperCase() + tokens[1].substring(1);
        let cost = Number(tokens[2]);
        if (!book.hasOwnProperty(country)) {
            book[country] = {};
        }
        if (!book[country].hasOwnProperty(town)) {
            book[country][town] = Number.MAX_VALUE;
        }
        if (book[country][town] > cost) {
            book[country][town] = cost;
        }
    }

    for (let country of Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]))) {
        let result = [];
        for (let town of Object.entries(country[1]).sort((a, b) => a[1] - b[1])) {
            result.push(`${town[0]} -> ${town[1]}`);
        }
        console.log(`${country[0]} -> ${result.join(' ')}`);
    }
}

solve(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200" ]
);