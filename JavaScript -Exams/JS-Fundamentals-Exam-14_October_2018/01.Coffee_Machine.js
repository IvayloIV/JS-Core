function solve(arr) {
    let totalBill = 0;
    let drinks = {
        'coffee caffeine' : 0.8,
        'coffee decaf' : 0.9,
        'tea' : 0.8
    };

    for (let item of arr) {
        let tokens = item.split(', ').filter(a => a !== '');
        let coins = Number(tokens[0]);
        let typeOfDrink = tokens[1];
        let sugarCount = Number(tokens[tokens.length - 1]);
        let milkExist = false;
        if (typeOfDrink === 'coffee') {
            typeOfDrink += ` ${tokens[2]}`;
            milkExist = checkMilkExist(tokens[3]);
        }
        else {
            milkExist = checkMilkExist(tokens[2]);
        }
        let priceOfDrink = drinks[typeOfDrink];

        if (sugarCount !== 0) {
            priceOfDrink += 0.1;
        }

        if (milkExist === true) {
            priceOfDrink += Number((priceOfDrink * 0.1).toFixed(1));
        }

        printCurrentBill(coins, priceOfDrink, tokens[1]);
    }

    console.log(`Income Report: ${totalBill.toFixed(2)}$`);

    function printCurrentBill(coins, priceOfDrink, drinkName) {
        if (coins >= priceOfDrink) {
            let safeCoins = coins - priceOfDrink;
            totalBill += priceOfDrink;
            console.log(`You ordered ${drinkName}. Price: ${priceOfDrink.toFixed(2)}$ Change: ${safeCoins.toFixed(2)}$`);
        } else {
            console.log(`Not enough money for ${drinkName}. Need ${(priceOfDrink - coins).toFixed(2)}$ more.`);
        }
    }

    function checkMilkExist(element) {
        return element === 'milk';
    }
}

solve(['8.00, coffee, decaf, 4',
    '1.00, tea, 2']);