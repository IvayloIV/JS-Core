function solve(arr) {
    let kompots = {
        peach: 0,
        plum: 0,
        cherry: 0,
        rakiya: 0
    };

    for (let line of arr) {
        let tokens = line.split(/\s+/).filter(a => a !== '');
        let fruit = tokens[0];
        let weightKg = Number(tokens[1]) * 1000;
        if (!kompots.hasOwnProperty(fruit)){
            kompots['rakiya'] += weightKg;
        } else {
            kompots[fruit] += weightKg;
        }
    }

    console.log(`Cherry kompots: ${Math.floor(kompots['cherry'] / 9 / 25)}`);
    console.log(`Peach kompots: ${Math.floor(kompots['peach'] / 140 / 2.5)}`);
    console.log(`Plum kompots: ${Math.floor(kompots['plum'] / 20 / 10)}`);
    console.log(`Rakiya liters: ${(kompots['rakiya'] / 1000 * 0.2).toFixed(2)}`);
}

solve([   'apple 6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65'
        ,'watermelon 20.54'
    ]
);