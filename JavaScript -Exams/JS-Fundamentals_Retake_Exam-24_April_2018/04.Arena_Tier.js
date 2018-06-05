function solve(arr) {
    let book = {};
    for (let element of arr) {
        if (element === 'Ave Cesar') break;
        let tokens = element.split(' -> ');
        if (tokens.length === 3){
            let gladiator = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);
            if (!book.hasOwnProperty(gladiator)){
                book[gladiator] = {
                    techniques: {},
                    totalPoints : 0
                }
            }
            if (!book[gladiator]['techniques'].hasOwnProperty(technique)){
                book[gladiator]['techniques'][technique] = skill;
                book[gladiator]['totalPoints'] += skill;
            } else if (book[gladiator]['techniques'][technique] < skill) {
                book[gladiator]['totalPoints'] -= book[gladiator]['techniques'][technique];
                book[gladiator]['techniques'][technique] = skill;
                book[gladiator]['totalPoints'] += book[gladiator]['techniques'][technique];
            }
        } else {
            let innerTokens = element.split(' vs ');
            let gladiator1 = innerTokens[0];
            let gladiator2 = innerTokens[1];
            if (!book.hasOwnProperty(gladiator1) || !book.hasOwnProperty(gladiator2)){
                continue;
            }
            let isHaveCommon = false;
            for (let entry of Object.entries(book[gladiator1]['techniques'])) {
                if (book[gladiator2]['techniques'].hasOwnProperty(entry[0])){
                    isHaveCommon = true;
                    break;
                }
            }
            if (isHaveCommon) {
                if (book[gladiator1]['totalPoints'] > book[gladiator2]['totalPoints']) {
                    delete  book[gladiator2];
                } else if (book[gladiator1]['totalPoints'] < book[gladiator2]['totalPoints']){
                    delete  book[gladiator1];
                }
            }
        }
    }

    for (let element of Object.entries(book).sort(sortGladiator)) {
        console.log(`${element[0]}: ${element[1]['totalPoints']} skill`);
        for (let innerElement of Object.entries(element[1]['techniques']).sort(sortTechniques)) {
            console.log(`- ${innerElement[0]} <!> ${innerElement[1]}`);
        }
    }

    function sortTechniques(a, b) {
        if (a[1] !== b[1]){
            return b[1] - a[1];
        }
        return a[0].localeCompare(b[0]);
    }

    function sortGladiator(a, b) {
        if (a[1]['totalPoints'] !== b[1]['totalPoints']){
            return b[1]['totalPoints'] - a[1]['totalPoints'];
        }
        return a[0].localeCompare(b[0]);
    }
}

solve([`Pesho -> Duck -> 400`,
`Julius -> Shield -> 150`,
`Gladius -> Heal -> 200`,
`Gladius -> Support -> 250`,
`Gladius -> Shield -> 250`,
`Pesho vs Gladius`,
`Gladius vs Julius`,
`Gladius vs Gosho`,
`Ave Cesar`]);