function solve(arr) {
    let n = Number(arr.pop());
    n %= arr.length;
    let lastElements = arr.splice(arr.length - n);
    console.log(lastElements.concat(arr).join(' '));
}
solve([`Banana`,
`Orange`,
`Coconut`,
`Apple`,
`5`]);