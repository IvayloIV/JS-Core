function solveObj(arr) {
    let commands = (() => {
        let trucks = {};
        let backupTires = [];

        function NEWTRUCK(tokens) {
            let truckType = tokens[0];
            let tyres = tokens[1].map(Number);

            if (!trucks.hasOwnProperty(truckType)) {
                trucks[truckType] = {
                    tyres,
                    "distance" : 0
                };
            }
        }           
        
        function NEWTIRES(tokens) {
            let newTyres = tokens[0].map(Number);
            backupTires.push(newTyres);
        }
        
        function WORK(tokens) {
            let truckType = tokens[0];
            let travelKm = Number(tokens[1]);

            if (!trucks.hasOwnProperty(truckType)) {
                return;
            }

            let amongOfTyres = travelKm / 1000;
            let currentTruck = trucks[truckType];
            if (currentTruck['tyres'].some(a => a < amongOfTyres)) {
                currentTruck['tyres'] = backupTires.shift();
                if (currentTruck['tyres'].some(a => a < amongOfTyres)) {
                    return;
                }
            }

            for (let i = 0; i < currentTruck['tyres'].length; i++) {
                currentTruck['tyres'][i] -= amongOfTyres;
            }
            currentTruck['distance'] += travelKm;
        }
        
        function report() {
            for (let truck of Object.entries(trucks)) {
                console.log(`Truck ${truck[0]} has traveled ${truck[1]['distance']}.`);
            }
            console.log(`You have ${backupTires.length} sets of tires left.`);
        }

        return {
            NEWTRUCK,
            NEWTIRES,
            WORK,
            report
        }
    })();

    for (let elements of arr) {
        let command = elements[0];
        commands[command]([elements[1], elements[2]]);
    }

    commands['report']();
}

function solveMap(arr) {
    let commands = (() => {
        let trucks = new Map();
        let backupTires = [];

        function NEWTRUCK(tokens) {
            let truckType = tokens[0];
            let tyres = tokens[1].map(Number);

            if (!trucks.has(truckType)) {
                trucks.set(truckType, {
                    tyres,
                    "distance" : 0
                });
            }
        }

        function NEWTIRES(tokens) {
            let newTyres = tokens[0].map(Number);
            backupTires.push(newTyres);
        }

        function WORK(tokens) {
            let truckType = tokens[0];
            let travelKm = Number(tokens[1]);

            if (!trucks.has(truckType)) {
                return;
            }

            let amongOfTyres = travelKm / 1000;
            let currentTruck = trucks.get(truckType);
            if (currentTruck['tyres'].some(a => a < amongOfTyres)) {
                currentTruck['tyres'] = backupTires.shift();
                if (currentTruck['tyres'].some(a => a < amongOfTyres)) {
                    return;
                }
            }

            for (let i = 0; i < currentTruck['tyres'].length; i++) {
                currentTruck['tyres'][i] -= amongOfTyres;
            }
            currentTruck['distance'] += travelKm;
        }

        function report() {
            for (let truck of [...trucks]) {
                console.log(`Truck ${truck[0]} has traveled ${truck[1]['distance']}.`);
            }
            console.log(`You have ${backupTires.length} sets of tires left.`);
        }

        return {
            NEWTRUCK,
            NEWTIRES,
            WORK,
            report
        }
    })();

    for (let elements of arr) {
        let command = elements[0];
        commands[command]([elements[1], elements[2]]);
    }

    commands['report']();
}

solveMap([
        ["NEWTRUCK", "B1002SA", [17, 17, 17, 17, 17, 17, 17, 17]],
        ["NEWTIRES", [8, 8, 4, 8, 8, 8, 9, 8]],
        ["NEWTIRES", [4, 4, 5, 4, 4, 7, 4, 4]],
        ["NEWTIRES", [5, 1, 5, 5, 5, 7, 5, 1]],
        ["WORK", "B1002SA", 7700],
        ["WORK", "B1002SA", 6000],
        ["WORK", "B1002SA", 3000]
    ]

);