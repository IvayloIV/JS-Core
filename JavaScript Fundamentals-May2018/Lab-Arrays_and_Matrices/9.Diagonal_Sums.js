function solve(matrix) {
    let firstSumDiagonal = 0;
    let secondSumDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstSumDiagonal += matrix[row][row];
        secondSumDiagonal += matrix[row][matrix[row].length - 1 - row];
    }
    console.log(firstSumDiagonal + ' ' + secondSumDiagonal);
}
solve([[20, 40],
    [10, 60]]
);