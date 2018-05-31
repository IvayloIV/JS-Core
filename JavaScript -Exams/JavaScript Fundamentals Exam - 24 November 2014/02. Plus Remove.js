function solve(arr) {
    arr = arr.filter(a => a !== '');
    let matrix = arr.map(a => a.split(''));
    let helper = arr.map(a => a.toLowerCase().split(''));

    for (let row = 0; row < helper.length; row++) {
        for (let cow = 0; cow < helper[row].length; cow++) {
            let currentSymbol = helper[row][cow];
            if (isInside(row, cow) && isEqualSymbols(row, cow, currentSymbol)){
                changeMainMatrix(row, cow);
            }
        }
    }

    console.log(matrix.map(a => a.filter(b => b !== undefined).join('')).join('\n'));

    function changeMainMatrix(row, cow) {
        matrix[row][cow] = undefined;
        matrix[row + 1][cow - 1] = undefined;
        matrix[row + 1][cow] = undefined;
        matrix[row + 1][cow + 1] = undefined;
        matrix[row + 2][cow] = undefined;
    }

    function isEqualSymbols(row, cow, currentSymbol) {
        return currentSymbol === helper[row + 1][cow - 1]
            && currentSymbol === helper[row + 1][cow]
            && currentSymbol === helper[row + 1][cow + 1]
            && currentSymbol === helper[row + 2][cow];
    }

    function isInside(row, cow) {
        return row + 2 < helper.length
            && cow - 1 < helper[row + 1].length
            && cow < helper[row + 1].length
            && cow + 1 < helper[row + 1].length
            && cow < helper[row + 2].length;
    }
}
solve([`@s@a@p@una`,
`p@@@@@@@@dna`,
`@6@t@*@*ego`,
`vdig*****ne6`,
`li??^*^*
`]);