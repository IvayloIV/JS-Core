function solve(n) {
    n %= 400;
    n = n < 0 ? 400 + n : n;
    console.log(n * 0.9);
}
solve(100);