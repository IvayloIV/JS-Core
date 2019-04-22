function solve(vatInclude, vatRate) {
    const price = 100 * vatInclude / (100 + vatRate);
    return price.toFixed(2);
}

console.log(solve(120, 20));