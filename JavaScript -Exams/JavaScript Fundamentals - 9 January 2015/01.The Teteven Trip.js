function solve(arr) {
    arr = arr.filter(a => a !== '');
    let typesFuel = {
        gas : 1.2,
        petrol : 1,
        diesel : 0.8
    };
    let routes = {
        1 : {long: 110, snow: 10},
        2 : {long: 95, snow: 30},
    };
    for (let element of arr) {
        let tokens = element.split(' ');
        let carModel = tokens[0];
        let fuelType = tokens[1];
        let route = Number(tokens[2]);
        let quantityFuel = Number(tokens[3]);

        let baseFuel = typesFuel[fuelType] * 10;
        let extraFuel = quantityFuel * 0.01;
        let allBaseFuel = baseFuel + extraFuel;
        let totalConsume = routes[route]['long'] * (allBaseFuel / 100);
        let extraSnow = 0.3 * allBaseFuel;
        let totalSnow = routes[route]['snow'] * (extraSnow / 100);
        let totalAmong = totalSnow + totalConsume;
        console.log(`${carModel} ${fuelType} ${route} ${Math.round(totalAmong)}`);
    }
}
solve([`BMW petrol 1 123.111`,
`Golf petrol 2 499.99999`,
`Lada gas 1 300.1223`,
`Mercedes diesel 2 312.541`,
`Audi gas 1 320.5`,
`Ferari petrol 1 150.75`,
`Zonda gas 2 202`,
`Kraisler diesel 2 312.54`]);