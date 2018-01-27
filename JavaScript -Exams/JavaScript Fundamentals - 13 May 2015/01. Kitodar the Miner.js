function solve(arr) {
    let silver = 0;
    let gold = 0;
    let diamond = 0;
    for (let element of arr) {
        let elementTokens = /^mine\s*(.*?)\s*\-\s*(.*?)\s*\:\s*([0-9]+)$/.exec(element);

        if (elementTokens == null){
            continue;
        }

        let type = elementTokens[2].toLocaleLowerCase();
        let quantity = Number(elementTokens[3]);

        if (type == "silver"){
            silver += quantity;
        } else if (type == "gold"){
            gold += quantity;
        } else if (type == "diamonds"){
            diamond += quantity;
        }
    }
    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamond}`);
}
solve([`mine bobovdol - gold: 10`,
    `mine - diamonds: 5`,
    `mine colas - wood: 10`,
    `mine myMine - silver:  14`,
    `mine silver:14 - silver: 14`]);