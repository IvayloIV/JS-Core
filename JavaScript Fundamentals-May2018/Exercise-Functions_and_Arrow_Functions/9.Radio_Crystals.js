function solve(arr) {
    let commands = {
        Cut: (num) => num / 4,
        Lap: (num) => num * 0.8,
        Grind: (num) => num - 20,
        Etch: (num) => num - 2,
        X_ray: (num) => num + 1,
        transportAndWash: (num) => Math.floor(num),
    };
    let limitNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let currentNum = arr[i];
        console.log(`Processing chunk ${currentNum} microns`);
        for (let key of Object.keys(commands).slice(0, 6)) {
            currentNum = makeCommand(commands[key], key, currentNum);
            if (currentNum === limitNum){
                break;
            }
        }
        console.log(`Finished crystal ${currentNum} microns`);
    }

    function makeCommand(func, key, currentNum) {
        let count = 0;
        while (func(currentNum) >= limitNum || (func(currentNum) >= limitNum - 1 && key === 'Etch')){
            currentNum = func(currentNum);
            count++;
            if (currentNum === limitNum){
                break;
            }
        }
        if (count !== 0) {
            console.log(`${key.replace('_', '-')} x${count}`);
            if (key !== 'X_ray') {
                currentNum = commands[`transportAndWash`](currentNum);
                console.log(`Transporting and washing`);
            }
        }
        return currentNum;
    }
}
solve([1375, 1376]);