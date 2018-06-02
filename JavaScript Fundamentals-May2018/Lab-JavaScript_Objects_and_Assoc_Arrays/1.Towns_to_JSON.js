function solve(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split('|').map(a => a.trim()).filter(a => a !== '');
        result.push({
            Town : town,
            Latitude : Number(latitude),
            Longitude : Number(longitude)
        });
    }
    console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);