function solve(arr) {
    arr = arr.map(Number);
    let result = [];
    result.push(arr.shift());
    arr.forEach(e => {
        if (e >= result.slice(-1)) {
            result.push(e);
        }
    });
    console.log(result.join('\n'));
}
solve([`1`,
`3`,
`8`,
`4`,
`10`,
`12`,
`3`,
`2`,
`24`]);