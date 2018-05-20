function solve(arrStr) {
    let matrix = [];
    let helperMatrix = [];
    arrStr.forEach(e => {
        matrix.push(e.split(''));
        helperMatrix.push(e.split(''));
    });

    for (let row = 0; row < helperMatrix.length; row++) {
        for (let cow = 0; cow < helperMatrix[row].length; cow++) {
            let currentSymbol = helperMatrix[row][cow];
            matrix = removeElementFormMatrix(currentSymbol, row, cow, matrix, helperMatrix);
        }
    }
    console.log(matrix.map(a => a.join('')).join('\n'));

    function removeElementFormMatrix(currentSymbol, row, cow, matrix, helperMatrix) {
        let helperRow = row + 1;
        let helperCowMin = cow - 1;
        let helperCowMax = cow + 1;
        while (true){
            for (let currentRow = helperCowMin; currentRow <= helperCowMax; currentRow++) {
                if (!isInside(currentRow, matrix, helperRow)){
                    return matrix;
                }
                if (currentSymbol !== helperMatrix[helperRow][currentRow]){
                    return matrix;
                }
            }
            matrix[row][cow] = '*';
            for (let currentCow = helperCowMin; currentCow <= helperCowMax; currentCow++) {
                matrix[helperRow][currentCow] = '*';
            }
            helperRow++;
            helperCowMin--;
            helperCowMax++;
        }
    }
    function isInside(cow, helperMatrix, helperRow) {
        return helperRow <= helperMatrix.length - 1 && cow >= 0 && cow <= helperMatrix[helperRow].length - 1;
    }
}
solve([`aaaaxaaaa`,
`sssxxxsss`,
`ddxxxxxdd`,
`gxxxxxxxg`,
`xxxxxxxxx`]);