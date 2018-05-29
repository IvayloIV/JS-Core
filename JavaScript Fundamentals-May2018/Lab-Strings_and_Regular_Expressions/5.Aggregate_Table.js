function solve(arr) {
    let towns = [];
    let sum = 0;
    for (let arrElement of arr) {
        let tokens = arrElement.split('|').filter(a => a !== '').map(a => a.trim());
        towns.push(tokens[0]);
        sum += Number(tokens[1]);
    }
    console.log(towns.join(', '));
    console.log(sum);
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);