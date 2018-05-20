function solve(rooms, guests) {
    let totalRooms = [];

    for (let room of rooms) {
        let current = {
            'id': room['number'],
            'type': room['type']
        };
        current['free'] = room['type'] === 'triple' ? 3 : 2;
        totalRooms.push(current);
    }

    let waitingGuest = 0;
    for (let guest of guests) {
        let firstPerson = guest['first'];
        let secondPerson = guest['second'];

        let waiting = 2;
        if (firstPerson['gender'] !== secondPerson['gender']){
            for (let room of totalRooms.filter(a => a['type'] === 'double-bedded')) {
                if (room['guest'] === undefined){
                    room['guest'] = [];
                }
                if (room['free'] === 2){
                    room['free'] = 0;
                    room['guest'].push({
                        name : firstPerson['name'],
                        age : firstPerson['age']
                    });
                    room['guest'].push({
                        name : secondPerson['name'],
                        age : secondPerson['age']
                    });
                    waiting = 0;
                    break;
                }
            }
        } else {
            for (let room of totalRooms) {
                if (room['type'] === "triple" && room['free'] > 1){
                    if (room['guest'] === undefined){
                        room['guest'] = [];
                        room['gender'] = secondPerson['gender'];
                    } else if (room['gender'] !== secondPerson['gender']){
                        continue;
                    }

                    if (firstPerson !== undefined) {
                        room['guest'].push({
                            name : firstPerson['name'],
                            age : firstPerson['age']
                        });
                        room['free']--;
                        waiting--;
                        firstPerson = undefined;
                    }
                    room['guest'].push({
                        name : secondPerson['name'],
                        age : secondPerson['age']
                    });
                    room['free']--;
                    waiting--;
                    break;
                } else if (room['type'] === "triple" && room['free'] === 1) {
                    if (room['gender'] !== secondPerson['gender']){
                        continue;
                    }
                    if (firstPerson !== undefined) {
                        room['guest'].push({
                            name : firstPerson['name'],
                            age : firstPerson['age']
                        });
                        firstPerson = undefined;
                        room['free']--;
                        waiting--;
                        continue;
                    } else {
                        room['guest'].push({
                            name : secondPerson['name'],
                            age : secondPerson['age']
                        });
                        room['free']--;
                        waiting--;
                        break;
                    }
                }
            }
        }
        waitingGuest += waiting;
    }

    for (let room of totalRooms.sort((a, b) => a['id'].localeCompare(b['id']))) {
        console.log(`Room number: ${room['id']}`);
        if (room['guest'] === undefined){
            room['guest'] = [];
        }
        for (let guest of room['guest'].sort((a, b) => a['name'].localeCompare(b['name']))) {
            console.log(`--Guest Name: ${guest['name']}`);
            console.log(`--Guest Age: ${guest['age']}`);
        }
        console.log(`Empty beds in the room: ${room['free']}`);
    }
    console.log(`Guests moved to the tea house: ${waitingGuest}`);
}
solve([ { number: '101A', type: 'double-bedded' },
        { number: '104', type: 'triple' },
        { number: '101B', type: 'double-bedded' },
        { number: '102', type: 'triple' } ],
    [ { first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },
        second: { name: 'Salisa Debelisa', gender: 'female', age: 25 } },
        { first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },
            second: { name: 'Jeko Snejev', gender: 'male', age: 18 } },
        { first: { name: 'Pesho Goshov', gender: 'male', age: 20 },
            second: { name: 'Gosho Peshov', gender: 'male', age: 18 } },
        { first: { name: 'Conor McGregor', gender: 'male', age: 29 },
            second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } } ]);