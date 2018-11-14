function solve(arr) {
    let ATM = (() => {
        let bank = [];
        let balance = 0;

        function Insert(money) {
            let currentAdded = 0;
            for (let current of money) {
                IncreaseBalance(current);
                currentAdded += current;
            }
            console.log(`Service Report: ${currentAdded}$ inserted. Current balance: ${balance}$.`);
        }
        
        function Withdraw(accountBalance, moneyToDraw) {
            if (accountBalance < moneyToDraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            }
            else if (balance < moneyToDraw) {
                console.log(`ATM machine is out of order!`);
            } else {
                accountBalance -= moneyToDraw;
                bank.sort((a, b) => b - a);
                DrawMoneyFromBank(moneyToDraw);
                
                console.log(`You get ${moneyToDraw}$. Account balance: ${accountBalance}$. Thank you!`);
            }
        }
        
        function Report(value) {
            let equalValues = bank.filter(a => a === value).length;
            console.log(`Service Report: Banknotes from ${value}$: ${equalValues}.`);
        }

        function DrawMoneyFromBank(moneyToDraw) {
            for (let i = 0; i < bank.length; i++) {
                if (bank[i] <= moneyToDraw) {
                    moneyToDraw -= bank[i];
                    ReduceBalance(i);
                    i--;
                }

                if (moneyToDraw <= 0) {
                    break;
                }
            }
        }

        function ReduceBalance(index) {
            balance -= bank[index];
            bank.splice(index, 1);
        }
        
        function IncreaseBalance(money) {
            bank.push(money);
            balance += money;
        }

        return {
            Insert,
            Withdraw,
            Report
        }
    })();

    for (let commands of arr) {
        if (commands.length === 1) {
            ATM.Report(commands[0]);
        } else if (commands.length === 2) {
            ATM.Withdraw(commands[0], commands[1]);
        } else {
            ATM.Insert(commands);
        }
    }
}

solve([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]);