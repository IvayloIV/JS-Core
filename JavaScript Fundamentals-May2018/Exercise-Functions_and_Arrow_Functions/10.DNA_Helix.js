function solve(n) {
    let symbols = 'ATCGTTAGGG';
    let count = 0;
    let rows = [
        () => `*${getSymbol()}--${getSymbol()}*`,
        () => `**${getSymbol()}${getSymbol()}**`,
        () => `*${getSymbol()}--${getSymbol()}*`,
        () => `${getSymbol()}----${getSymbol()}`,
    ];

    for (let i = 1; i <= n; i++) {
        console.log(rows[i % 4]());
    }
    
    function getSymbol() {
        return symbols.charAt(count++ % 10);
    }
}
solve(10);