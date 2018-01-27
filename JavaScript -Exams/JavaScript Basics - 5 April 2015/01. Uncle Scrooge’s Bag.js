function solve(arr){
    let coins = 0;

    for(let element of arr){
        let elementTokens = element.split(/\s+/);
        let coinName = elementTokens[0].toLowerCase();
        let coinValue = Number(elementTokens[1]);

        if (coinName != "coin" || coinValue % 1 !== 0 || coinValue <= 0){
            continue;
        }
        coins += coinValue;
    }
    let gold = Math.floor(coins/100);
    coins = coins - gold * 100;
    let silver = Math.floor(coins/ 10);
    let bronze = coins - silver * 10;
    console.log(`gold : ${gold}`);
    console.log(`silver : ${silver}`);
    console.log(`bronze : ${bronze}`);
}
solve(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);