function solve(arr) {
    let cars = {};

    for (let i = 0; i < arr.length; i++) {
        let { model, regNumber, town, price } = arr[i];

        if (!cars.hasOwnProperty(town)) {
            cars[town] = {
                price: 0,
                models: [],
                regNumbers: []
            };
        }

        cars[town].price += price;
        cars[town].models.push(model);
        cars[town].regNumbers.push(regNumber);
    }

    let sortedTowns = Object.entries(cars).sort((a, b) => {
        if (a[1]['price'] !== b[1]['price']) {
            return b[1]['price'] - a[1]['price'];
        }

        if (a[1]['regNumbers'].length !== b[1]['regNumbers'].length) {
            return b[1]['regNumbers'].length - a[1]['regNumbers'].length;
        }

        return a[0].localeCompare(b[0]);
    });

    const bestProfitable = sortedTowns[0];
    console.log(`${bestProfitable[0]} is most profitable - ${bestProfitable[1]['price']} BGN`);

    const models = arr.filter(a => a['town'] === bestProfitable[0]);
    let objModels = {};
    for (let i = 0; i < models.length; i++) {
        const currentModel = models[i];
        const model = currentModel['model'];

        if (!objModels.hasOwnProperty(model)) {
            objModels[model] = {
                count: 0,
                biggestPrice: 0
            };
        }

        objModels[model].count++;
        if (objModels[model].biggestPrice < currentModel.price) {
            objModels[model].biggestPrice = currentModel.price;
        }
    }

    const sortedModels = Object.entries(objModels).sort((a, b) => {
        if (a[1]['count'] !== b[1]['count']) {
            return b['count'] - a['count'];
        }

        if (a[1]['biggestPrice'] !== b[1]['biggestPrice']) {
            return b[1]['biggestPrice'] - a[1]['biggestPrice'];
        }

        return a[0].localeCompare(b[0]);
    });

    const bestModel = sortedModels[0];
    console.log(`Most driven model: ${bestModel[0]}`);

    const allPopularModels = arr
        .filter(a => a.model === bestModel[0])
        .sort((a, b) => a.town.localeCompare(b.town));


    const printedTowns = [];
    for (let model of allPopularModels) {
        if (printedTowns.indexOf(model.town) === -1) {
            console.log(`${model.town}: ${allPopularModels
                .filter(a => a.town == model.town)
                .map(a => a.regNumber)
                .sort()
                .join(', ')}`
            );
            
            printedTowns.push(model.town);
        }
    }
}

solve([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]);