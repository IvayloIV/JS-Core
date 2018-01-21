function towns(arr) {
    let towns = [];
    arr.shift();
    for (let t of arr) {
        let townsTokens = t.split(/\s*\|\s*/g).filter(a => a != '');
        let currentTown = {
            'Town': townsTokens[0],
            'Latitude': Number(townsTokens[1]),
            'Longitude': Number(townsTokens[2])
        };
        towns.push(currentTown);
    }
    console.log(JSON.stringify(towns));
}
towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);