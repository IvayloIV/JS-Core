function solve(arr) {
    arr = arr.filter(a => a !== '').map(Number);
    let money = 0;
    let firstBit = -1;
    let allBits = 0;

    for (let i = 0; i < arr.length; i++) {
        let day = i + 1;
        let dayGold = arr[i];
        if (day % 3 === 0){
            dayGold *= 0.7;
        }
        money += dayGold * 67.51;
        while (money >= 11949.16){
            if (firstBit === -1) {
                firstBit = day;
            }
            money -= 11949.16;
            allBits++;
        }
    }
    console.log(`Bought bitcoins: ${allBits}`);
    if (firstBit !== -1){
        console.log(`Day of the first purchased bitcoin: ${firstBit}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
solve(['50', '100']);