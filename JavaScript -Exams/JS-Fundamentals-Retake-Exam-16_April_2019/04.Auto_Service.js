function solve(arr) {
    const commands = (() => {
        const cars = {};
        const allInstructions = [];

        function addPart([model, part, serialNumber]) {
            if (!cars.hasOwnProperty(model)) {
                cars[model] = {};
            }

            if (!cars[model].hasOwnProperty(part)) {
                cars[model][part] = [];
            }

            cars[model][part].push(serialNumber);
        }

        function instructions([model]) {
            allInstructions.push(model);
        }

        function repair([model, specifications]) {
            specifications = JSON.parse(specifications);

            const index = allInstructions.indexOf(model);
            if (index === -1) {
                console.log(`${model} is not supported`);
                return;
            }

            if (cars.hasOwnProperty(model)) {
                for(let spec in specifications){
                    if (specifications[spec] === 'broken' && cars[model].hasOwnProperty(spec)) {
                        const serialNum = cars[model][spec].shift();
                        specifications[spec] = serialNum;
                    }
                }
            }

            allInstructions.splice(index, 1);
            console.log(`${model} client - ${JSON.stringify(specifications)}`);
        }

        function printCars() {
            for(let car of Object.entries(cars).sort((a, b) => a[0].localeCompare(b[0]))) {
                console.log(`${car[0]} - ${JSON.stringify(car[1])}`);
            }
        }

        return {
            addPart,
            instructions,
            repair,
            printCars
        };
    })();
    

    for(let element of arr) {
        let tokens = element.split(' ');
        const command = tokens.shift();
        commands[command](tokens);
    }
    commands['printCars']();
}

solve([
    'repair mazda {"engine":"broken"}',
    'instructions bmw',
    'addPart opel engine GV1399SSS'
]);