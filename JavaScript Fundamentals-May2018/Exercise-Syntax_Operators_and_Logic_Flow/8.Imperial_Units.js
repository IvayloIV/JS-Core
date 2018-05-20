function solve(n) {
    let r1 = Math.floor(n / 12);
    let r2 = n % 12;
    console.log(`${r1}'-${r2}"`);
}
solve(55);