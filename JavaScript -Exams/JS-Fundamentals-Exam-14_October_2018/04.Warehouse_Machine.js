function solve(arr) {
    let commands = (() => {
        let book = {};

        function IN([coffeeBrand, coffeeName, expireDateStr, quantity]) {
            quantity = Number(quantity);
            let expireDate = new Date(expireDateStr);
            quantity = Number(quantity);

            addNewCoffee(coffeeBrand, coffeeName, expireDate, quantity);
        }
        
        function OUT([coffeeBrand, coffeeName, expireDateStr, quantity]) {
            let expireDate = new Date(expireDateStr);
            quantity = Number(quantity);

            if (book.hasOwnProperty(coffeeBrand) && book[coffeeBrand].hasOwnProperty(coffeeName)
                && book[coffeeBrand][coffeeName].expireDate >= expireDate
                && book[coffeeBrand][coffeeName].quantity >= quantity) {
                book[coffeeBrand][coffeeName].quantity -= quantity;
            }
        }
        
        function REPORT() {
            console.log(`>>>>> REPORT! <<<<<`);

            for (let entry of Object.entries(book)) {
                console.log(`Brand: ${entry[0]}:`);
                for (let kvp of Object.entries(entry[1])) {
                    console.log(`-> ${kvp[0]} -> ${getFormattedDate(kvp[1].expireDate)} -> ${kvp[1].quantity}.`);
                }
            }
        }
        
        function INSPECTION() {
            console.log(`>>>>> INSPECTION! <<<<<`);

            for (let entry of Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]))) {
                console.log(`Brand: ${entry[0]}:`);
                for (let kvp of Object.entries(entry[1]).sort((a, b) => b[1].quantity - a[1].quantity)) {
                    console.log(`-> ${kvp[0]} -> ${getFormattedDate(kvp[1].expireDate)} -> ${kvp[1].quantity}.`);
                }
            }
        }

        function getFormattedDate(date) {
            return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
        }

        function addNewCoffee(coffeeBrand, coffeeName, expireDate, quantity) {
            if (!book.hasOwnProperty(coffeeBrand)) {
                book[coffeeBrand] = {};
            }

            if (!book[coffeeBrand].hasOwnProperty(coffeeName)){
                book[coffeeBrand][coffeeName] = { expireDate, quantity };
            } else if (book[coffeeBrand][coffeeName].expireDate < expireDate) {
                book[coffeeBrand][coffeeName].expireDate = expireDate;
                book[coffeeBrand][coffeeName].quantity = quantity;
            } else if (book[coffeeBrand][coffeeName].expireDate === expireDate) {
                book[coffeeBrand][coffeeName].quantity += quantity;
            }
        }

        return {
            IN,
            OUT,
            REPORT,
            INSPECTION
        }
    })();

    for (let element of arr) {
        let tokens = element.split(', ');
        commands[tokens[0]](tokens.slice(1));
    }
}

solve([
        "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
        "IN, Folgers, Black Silk, 2023-03-01, 14",
        "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
        "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
        "IN, Folgers, Black Silk, 2022-01-01, 10",
        "IN, Lavazza, Intenso, 2022-07-19, 20",
        "OUT, Dallmayr, Espresso, 2022-07-19, 5",
        "OUT, Dallmayr, Crema, 2022-07-19, 5",
        "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
        "REPORT",
        "INSPECTION",
    ]);