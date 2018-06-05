function solve(lossFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let secondLossGame = Math.floor(lossFight / 2);
    let thirthLossGame = Math.floor(lossFight / 3);
    let sixthLossGame = Math.floor(lossFight / 6);
    let twintyLossGame = Math.floor(lossFight / 12);
    let sum = helmetPrice * secondLossGame +
        swordPrice * thirthLossGame +
        shieldPrice * sixthLossGame +
        armorPrice * twintyLossGame;
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

solve(23,
12.50,
21.50,
40,
200
);