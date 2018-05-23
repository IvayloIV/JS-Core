function solve(matrix) {
    let biggestElement = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let cow = 0; cow < matrix[row].length; cow++) {
            if (biggestElement < matrix[row][cow]){
                biggestElement = matrix[row][cow];
            }
        }
    }
    console.log(biggestElement);
}

solve([[20, 50, 10],
    [8, 33, 145]]
);