function solve(arr) {
    let count = 1;
    let result = [];
    for (let arrElement of arr) {
        if (arrElement === 'add'){
            result.push(count);
        } else {
            result.splice(result.length - 1, 1);
        }
        count++;
    }
    console.log(result.length === 0 ? 'Empty' : result.join('\n'));
}
solve([`add`,
`add`,
`remove`,
`add`,
`add`]);