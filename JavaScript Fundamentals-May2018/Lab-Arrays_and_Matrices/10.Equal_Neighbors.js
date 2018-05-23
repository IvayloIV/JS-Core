function solve(matrix) {
    let count = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let cow = 0; cow < matrix[row].length; cow++) {
            if (cow + 1 <= matrix[row].length -1 && matrix[row][cow] === matrix[row][cow + 1]){
                count++;
            }
            if (row + 1 <= matrix.length - 1 && matrix[row][cow] === matrix[row + 1][cow]){
                count++;
            }
        }
    }
    console.log(count);
}
solve([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);

solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);