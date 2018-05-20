function solve(arr) {
    let [p, i, n, t] = arr;
    i /= 100;
    n = 12 / n;
    console.log((p * Math.pow(1 + (i / n), n * t)).toFixed(2));
}
solve([1500, 4.3, 3, 6]);