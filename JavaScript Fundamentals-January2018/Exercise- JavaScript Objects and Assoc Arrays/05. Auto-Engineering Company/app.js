function autoCompany(arr) {
    let book = new Map();

    for (let e of arr) {
        let inputTokwn = e.split(/\s\|\s/);
        let carBrand = inputTokwn[0];
        let carModel = inputTokwn[1];
        let producedCars = Number(inputTokwn[2]);

        if (!book.has(carBrand)) {
            book.set(carBrand, new Map());
        }
        if (!book.get(carBrand).has(carModel)) {
            book.get(carBrand).set(carModel, 0);
        }
        book.get(carBrand).set(carModel, book.get(carBrand).get(carModel) + producedCars);
    }

    for (let [key, values] of book) {
        console.log(key);
        for (let [a, b] of values) {
            console.log(`###${a} -> ${b}`);
        }
    }
}
autoCompany([`Audi | Q7 | 1000`,
    `Audi | Q6 | 100`,
    `BMW | X5 | 1000`,
    `BMW | X6 | 100`,
    `Citroen | C4 | 123`,
    `Volga | GAZ-24 | 1000000`,
    `Lada | Niva | 1000000`,
    `Lada | Jigula | 1000000`,
    `Citroen | C4 | 22`,
`Citroen | C5 | 10`]);