function heroicInvent(arr) {
    let book = [];
    for (let input of arr) {
        let inputTokens = input.split(/\s\/\s/).filter(a => a != '');
        let name = inputTokens[0];
        let heroLevel = Number(inputTokens[1]);
        let arrayItems = [];
        if (inputTokens.length > 2) {
            arrayItems = inputTokens[2].split(/\,\s/).filter(a => a != '');
        }

        let currentItem = {};
        currentItem['name'] = name;
        currentItem['level'] = Number(heroLevel);
        currentItem['items'] = [];
        for (let e of arrayItems) {
            currentItem['items'].push(e);
        }
        book.push(currentItem);
    }
    console.log(JSON.stringify(book));
}
heroicInvent([`Isacc / 25 / Apple, GravityGun`,
`Derek / 12 / BarrelVest, DestructionSword`,
`Hes / 1 / Desolator, Sentinel, Antara`]);
