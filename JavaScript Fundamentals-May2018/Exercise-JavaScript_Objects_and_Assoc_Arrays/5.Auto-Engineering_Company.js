function solveMap(arr) {
    let book = new Map();
    for (let element of arr) {
        let tokens = element.split('|').map(a => a.trim());
        let carBrand = tokens[0];
        let carModel = tokens[1];
        let producedCars = Number(tokens[2]);
        if(!book.has(carBrand)){
            book.set(carBrand, new Map());
        }
        if (!book.get(carBrand).has(carModel)){
            book.get(carBrand).set(carModel, 0);
        }
        let brand = book.get(carBrand);
        brand.set(carModel, brand.get(carModel) + producedCars);
    }

    for (let element of [...book]) {
        console.log(element[0]);
        for (let innerElement of [...element[1]]) {
            console.log(`###${innerElement[0]} -> ${innerElement[1]}`);
        }
    }
}

function solveObj(arr) {
    let book = {};
    for (let element of arr) {
        let tokens = element.split('|').map(a => a.trim());
        let carBrand = tokens[0];
        let carModel = tokens[1];
        let producedCars = Number(tokens[2]);
        if(!book.hasOwnProperty(carBrand)){
            book[carBrand] = {};
        }
        if (!book[carBrand].hasOwnProperty(carModel)){
            book[carBrand][carModel] = 0;
        }
        book[carBrand][carModel] += producedCars;
    }

    for (let element of Object.entries(book)) {
        console.log(element[0]);
        for (let innerElement of Object.entries(element[1])) {
            console.log(`###${innerElement[0]} -> ${innerElement[1]}`);
        }
    }
}

solveObj([`Audi | Q7 | 1000`,
`Audi | Q6 | 100`,
`BMW | X5 | 1000`,
`BMW | X6 | 100`,
`Citroen | C4 | 123`,
`Volga | GAZ-24 | 1000000`,
`Lada | Niva | 1000000`,
`Lada | Jigula | 1000000`,
`Citroen | C4 | 22`,
`Citroen | C5 | 10`]);