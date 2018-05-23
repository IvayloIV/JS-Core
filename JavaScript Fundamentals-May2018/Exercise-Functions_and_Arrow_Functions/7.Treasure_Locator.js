function solve(arr) {
    let island = {
        Tuvalu : (x, y) => x >= 1 && x <= 3 && y >= 1 && y <= 3,
        Tonga : (x, y) => x >= 0 && x <= 2 && y >= 6 && y <= 8,
        Samoa : (x, y) => x >= 5 && x <= 7 && y >= 3 && y <= 6,
        Cook : (x, y) => x >= 4 && x <= 9 && y >= 7 && y <= 8,
        Tokelau : (x, y) => x >= 8 && x <= 9 && y >= 0 && y <= 1
    };
    for (let i = 0; i < arr.length; i+= 2) {
        let x = arr[i];
        let y = arr[i + 1];
        let isFind = false;
        for (let key of Object.keys(island)) {
            if (island[key](x, y)){
                isFind = true;
                console.log(key);
                break;
            }
        }
        if (!isFind){
            console.log(`On the bottom of the ocean`);
        }
    }
}
solve([4, 2, 1.5, 6.5, 1, 3]);