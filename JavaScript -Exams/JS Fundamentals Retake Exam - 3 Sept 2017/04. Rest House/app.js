function restHouse(rooms, quest) {
    let bookTypes = new Map();
    let bookRooms = new Map();

    for (let i = 0; i < rooms.length; i++) {
        let current = rooms[i];
        let numberRoom = current['number'];
        let typeRoom = current['type'];

        if (!bookTypes.has(typeRoom)) {
            bookTypes.set(typeRoom, new Map());
        }
        bookTypes.get(typeRoom).set(numberRoom, typeRoom == "triple" ? 3 : 2);

        bookRooms.set(numberRoom, new Map());
    }

    let globalCount = 1;
    for (let i = 0; i < quest.length; i++) {
        let currentGuest = quest[i];
        let firstPerson = currentGuest['first'];
        let secondPerson = currentGuest['second'];

        let firstGender = firstPerson['gender'];
        let secondGender = secondPerson['gender'];

        if ((firstGender == "male" && secondGender == "female") || (firstGender == "female" && secondGender == "male")) {
            for (let currentType of [...bookTypes].filter(a => a[0] == "double-bedded")) {
                for (let [totalNumberRoom, freeBeds] of currentType[1]) {
                    if (freeBeds != 0) {
                        bookTypes.get(currentType[0]).set(totalNumberRoom, 0);
                        bookRooms.get(totalNumberRoom).set('Family', {
                            'name1': firstPerson['name'], 'age1': firstPerson['age'],
                            'name2': secondPerson['name'], 'age2': secondPerson['age'],
                        });
                    }
                }
            }
        } else {
            for (let currentType of [...bookTypes].filter(a => a[0] == "triple")) {
                for (let [totalNumberRoom, freeBeds] of currentType[1]) {
                    let roomGender = bookRooms.get(totalNumberRoom)[0];
                    if (!roomGender || roomGender === firstGender) {
                        let count = 1;
                        while (freeBeds != 0) {
                            let subRoom = bookTypes.get(currentType[0]).get(totalNumberRoom);
                            bookTypes.get(currentType[0]).set(totalNumberRoom, subRoom - 1);
                            if (!bookRooms.get(totalNumberRoom).get(firstGender)) {
                                bookRooms.get(totalNumberRoom).set(firstGender, {});
                            }
                            bookRooms.get(totalNumberRoom).get(firstGender)[`name${globalCount}`] = count == 1 ? firstPerson['name'] : secondPerson['name'];
                            bookRooms.get(totalNumberRoom).get(firstGender)[`age${globalCount}`] = count == 1 ? firstPerson['age'] : secondPerson['age'];
                            count++;
                            globalCount++;
                        }
                    }
                }
            }
        }
        for (let keys of [...bookRooms].sort((a, b) => a[0] - b[0])) {
            console.log(`Room number: ${keys[0]}`);
            let current = [...keys[1]];
            for (let values of Object.keys(current[0][1])) {
                if (values.startsWith('name')) {
                    console.log(`--Guest Name: ${current[0][1][values]}`);
                } else {
                    console.log(`--Guest Age: ${current[0][1][values]}`);
                }
            }
        }
    }
}
restHouse([{ number: '206', type: 'double-bedded' },
{ number: '311', type: 'triple' }],
    [{
        first: { name: 'Tanya Popova', gender: 'male', age: 24 },
        second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 }
    },
    {
        first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
        second: { name: 'Angel Nachev', gender: 'male', age: 22 }
    },
    {
        first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
        second: { name: 'Boryana Baeva', gender: 'female', age: 22 }
    }]
);