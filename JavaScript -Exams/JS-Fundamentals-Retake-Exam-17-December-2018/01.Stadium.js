function solve(arr) {
    let prizes = {
        "LEVSKI": {
            "A": 10,
            "B": 7,
            "C": 5
        },
        "LITEX": {
            "A": 10,
            "B": 7,
            "C": 5
        },
        "VIP": {
            "A": 25,
            "B": 15,
            "C": 10
        }
    };

    let totalSeats = Number(arr.shift());
    let takenSeats = [];
    let fans = [];

    for (let newSeat of arr) {
        let tokens = newSeat.split('*');
        let team = tokens[0];
        let numberSeat = Number(tokens[1]);
        let sector = tokens[2];

        if (takenSeats.includes(newSeat)) {
            console.log(`Seat ${numberSeat} in zone ${team} sector ${sector} is unavailable`);
            continue;
        }
        takenSeats.push(newSeat);
        fans.push(prizes[team][sector]);
    }

    console.log(`${fans.reduce((a, b) => a + b)} lv.`);
    console.log(`${fans.length} fans`);
}

solve(["5","LITEX*5*A", "LEVSKI*2*A", "LEVSKI*3*B", "VIP*4*C", "LITEX*3*B", "LEVSKI*2*A", "LITEX*5*B", "LITEX*5*A", "VIP*1*A"]
);