function solve(n) {
    let s = n;
    if (s % 2 === 0) s--;
    for (let i = 1; i <= s; i++) {
        if (i === 1 || i === s || i * 2 - 1 === s){
            console.log(drawFigure('+', '-'));
        } else {
            console.log(drawFigure('|', ' '));
        }
    }

    function drawFigure(symbolStart, symbolMiddle) {
        let result = symbolStart;
        result += symbolMiddle.repeat(n - 2);
        result += symbolStart;
        result += symbolMiddle.repeat(n - 2);
        return result += symbolStart;
    }
}
solve(7);