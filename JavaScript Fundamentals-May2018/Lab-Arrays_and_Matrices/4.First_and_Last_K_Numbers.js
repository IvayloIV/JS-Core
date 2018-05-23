function solve(arr) {
    let n = arr.shift();
    console.log(arr.slice(0, n).join(' '));
    console.log(arr.slice(-n).join(' '));
}
solve([2, 1, 3, 4, 5]);
solve([2, 1, 4, 5]);