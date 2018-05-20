function solve(arr) {
    let sum = arr.reduce((a, b) => a + b);
    console.log(`sum = ${sum}`);
    let VAT = sum * 0.2;
    console.log(`VAT = ${VAT}`);
    console.log(`total = ${sum + VAT}`);
}
solve([1.20, 2.60, 3.50]);