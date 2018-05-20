function solve(a, b, c) {
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(s);
}
solve(2, 3.5, 4);