function cappyJuice(arr) {
    let book = {};
    let bottleBook = {};

    for (let e of arr) {
        let inputTokens = e.split(" => ").filter(a => a != '');
        let name = inputTokens[0];
        var qantity = Number(inputTokens[1]);

        if (!book.hasOwnProperty(name)) {
            book[name] = 0;
        }
        book[name] += qantity;

        let bottleQuantyty = book[name];
        if (bottleQuantyty >= 1000) {
            let totalBottle = Math.floor(bottleQuantyty / 1000);
            bottleBook[name] = totalBottle;
        }
    }
    for (let key of Object.keys(bottleBook)) {
        console.log(`${key} => ${bottleBook[key]}`);
    }
}
cappyJuice([`Orange => 2000`,
    `Peach => 1432`,
    `Banana => 450`,
    `Peach => 600`,
`Strawberry => 549`]);