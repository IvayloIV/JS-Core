function solve(arrKingdom, arrAttacks) {
    let book = {};
    for (let currentKingdom of arrKingdom) {
        if (!book.hasOwnProperty(currentKingdom['kingdom'])){
            book[currentKingdom['kingdom']] = {};
        }
        if (!book[currentKingdom['kingdom']].hasOwnProperty(currentKingdom['general'])){
            book[currentKingdom['kingdom']][currentKingdom['general']] = {
                'army' : 0,
                'wins' : 0,
                'losses' : 0
            };
        }
        book[currentKingdom['kingdom']][currentKingdom['general']]['army'] += currentKingdom['army'];
    }
    for (let currentAttack of arrAttacks) {
        let firstKingdom = currentAttack[0];
        let firstGeneral = currentAttack[1];
        let secondKingdom = currentAttack[2];
        let secondGeneral = currentAttack[3];

        if (firstKingdom === secondKingdom){
            continue;
        }
        let winnerPoints = book[firstKingdom][firstGeneral]['army'] - book[secondKingdom][secondGeneral]['army'];
        if (winnerPoints > 0){
            book = increaseArmy(firstKingdom, firstGeneral, secondKingdom, secondGeneral, book);

        } else if (winnerPoints < 0){
            book = increaseArmy(secondKingdom, secondGeneral, firstKingdom, firstGeneral, book);
        }
    }
    let winner = Object.entries(book).sort(mySort)[0];
    console.log(`Winner: ${winner[0]}`);
    for (let winnerGeneral of Object.entries(winner[1]).sort((a, b) => b[1]['army'] - a[1]['army'])) {
        console.log(`/\\general: ${winnerGeneral[0]}`);
        console.log(`---army: ${winnerGeneral[1]['army']}`);
        console.log(`---wins: ${winnerGeneral[1]['wins']}`);
        console.log(`---losses: ${winnerGeneral[1]['losses']}`);
    }

    function increaseArmy(firstKingdom, firstGeneral, secondKingdom, secondGeneral, book) {
        book[firstKingdom][firstGeneral]['army'] = Math.floor(book[firstKingdom][firstGeneral]['army'] * 1.1);
        book[firstKingdom][firstGeneral]['wins']++;
        book[secondKingdom][secondGeneral]['army'] = Math.floor(book[secondKingdom][secondGeneral]['army'] * 0.9);
        book[secondKingdom][secondGeneral]['losses']++;
        return book;
    }
    function mySort(a, b) {
        let winsFirst = 0;
        let winsSecond = 0;
        let lossFirst = 0;
        let lossSecond = 0;
        for (let firstElement of Object.entries(a[1])) {
            winsFirst += firstElement[1]['wins'];
            lossFirst += firstElement[1]['losses'];
        }
        for (let secondElement of Object.entries(b[1])) {
            winsSecond += secondElement[1]['wins'];
            lossSecond += secondElement[1]['losses'];
        }

        if (winsFirst !== winsSecond){
            return winsSecond - winsFirst;
        }
        if (lossFirst !== lossSecond) {
            return lossFirst - lossSecond;
        }
        return a[0].localeCompare(b[0]);
    }
}
solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);