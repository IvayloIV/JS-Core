function solve(arr) {
    let specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];
    let money = 0;
    let specializedCount = 0;
    let clumsyCount = 0;
    for (let element of arr) {
        let tokens = element.split(':').map(a => a.trim());
        let profession = tokens[0];
        let gold = Number(tokens[1]);
        if (specialized.indexOf(profession) !== -1) {
            if (gold < 200) {
                continue;
            }
            specializedCount++;
            gold *= 0.8;
            if (specializedCount % 2 === 0) {
                gold += 200;
            }
        } else if (clumsy.indexOf(profession) !== -1) {
            clumsyCount++;
            if (clumsyCount % 2 === 0){
                gold *= 0.95;
            } else if (clumsyCount % 3 === 0) {
                gold *= 0.9;
            }
        }
        money += gold;
    }

    console.log(`Final sum: ${money.toFixed(2)}`);
    if (money < 1000) {
        console.log(`Mariyka need to earn ${(1000 - money).toFixed(2)} gold more to continue in the next task.`);
    } else {
        console.log(`Mariyka earned ${(money - 1000).toFixed(2)} gold more.`);
    }
}

solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);