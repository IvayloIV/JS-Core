function radioCrystals(arr) {
    let cut = a => a / 4;
    let lap = a => a * 0.8;
    let grind = a => a -= 20;
    let etch = a => a -= 2;
    let transportAndWash = a => Math.floor(a);
    let xRay = a => a + 1;

    function commands(currentNum, stringCommand, currentCommand) {
        let newSize = currentCommand(currentNum);
        let count = 0;
        while (newSize >= wantedNum || Math.floor(wantedNum - newSize) === 1) {
            currentNum = newSize;
            newSize = currentCommand(newSize);
            count++;
        }

        if (count > 0) {
            currentNum = transportAndWash(currentNum);
            console.log(`${stringCommand} x${count}`);
            console.log(`Transporting and washing`);
        }
        return currentNum;
    }

    let wantedNum = arr[0];

    for (var i = 1; i < arr.length; i++) {
        let currentNum = arr[i];
        console.log(`Processing chunk ${currentNum} microns`);

        currentNum = commands(currentNum, 'Cut', cut);
        currentNum = commands(currentNum, 'Lap', lap);
        currentNum = commands(currentNum, 'Grind', grind);
        currentNum = commands(currentNum, 'Etch', etch);

        if (wantedNum - currentNum === 1) {
            currentNum = xRay(currentNum);
            console.log(`X-ray x1`);
        }
        console.log(`Finished crystal ${currentNum} microns`);
    }
}
radioCrystals([1000, 4000, 8100]);