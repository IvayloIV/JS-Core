function solveObj(arr) {
    let currentProducts = {};
    let bottles = {};
    for (let element of arr) {
        let tokens = element.split('=>').map(a => a.trim());
        let product = tokens[0];
        let qty = Number(tokens[1]);
        if (!currentProducts.hasOwnProperty(product)){
            currentProducts[product] = 0;
        }
        currentProducts[product] += qty;
        while (currentProducts[product] >= 1000){
            if (!bottles.hasOwnProperty(product)){
                bottles[product] = 0;
            }
            bottles[product]++;
            currentProducts[product] -= 1000;
        }
    }

    for (let entry of Object.entries(bottles)) {
        console.log(`${entry[0]} => ${entry[1]}`);
    }
}

function solveMap(arr) {
    let currentProducts = new Map();
    let bottles = new Map();
    for (let element of arr) {
        let tokens = element.split('=>').map(a => a.trim());
        let product = tokens[0];
        let qty = Number(tokens[1]);
        if (!currentProducts.has(product)){
            currentProducts.set(product, 0);
        }
        currentProducts.set(product, currentProducts.get(product) + qty);
        while (currentProducts.get(product) >= 1000){
            if (!bottles.has(product)){
                bottles.set(product, 0);
            }
            bottles.set(product, bottles.get(product) + 1);
            currentProducts.set(product, currentProducts.get(product) - 1000);
        }
    }

    for (let entry of [...bottles]) {
        console.log(`${entry[0]} => ${entry[1]}`);
    }
}

solveMap([`Kiwi => 234`,
`Pear => 2345`,
`Watermelon => 3456`,
`Kiwi => 4567`,
`Pear => 5678`,
`Watermelon => 6789`]);