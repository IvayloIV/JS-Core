function solve(arr) {
    for(let element of arr){
        let elementTokns = element.split(" ").filter(a => a != "");
        let [carModel, fuelType, route, luggageWeight] = elementTokns;
        route = Number(route);
        luggageWeight = Number(luggageWeight);

        let perKm = 10;
        if (fuelType == "gas"){
            perKm *= 1.2;
        } else if(fuelType == "diesel"){
            perKm *= 0.8;
        }
        luggageWeight *= 0.01;
        let fuelConsume = luggageWeight + perKm;

        let routeKm = 0;
        let snowsKm = 0;

        if (route == 1){
            routeKm = 110;
            snowsKm = 10;
        } else if (route == 2){
            routeKm = 95;
            snowsKm = 30;
        }

        let totalConsume = routeKm * (fuelConsume / 100);
        let extraSnow = 0.3 * fuelConsume;
        let addFuel = snowsKm * (extraSnow / 100);
        let totalAmount = addFuel + totalConsume;
        console.log(`${carModel} ${fuelType} ${route} ${Math.round(totalAmount)}`);
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