function solve(arr) {
    let maxNumber = Number.NEGATIVE_INFINITY;

    arr.forEach(a => a.forEach(e => maxNumber = Math.max(e, maxNumber)));

    return maxNumber;
}
console.log(solve([[20, 50, 10],
[8, 33, 145]]
));
