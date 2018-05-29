function solve(arr) {
    let matrix = arr.map(a => a.split(' ').map(Number));

    let firstSum = 0;
    let secondSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrix[row].length - 1 - row];
    }

    if (firstSum === secondSum){
        matrix.forEach((arr1, row) => {
            matrix[row].forEach((arr2, cow) => {
                if (row !== cow && matrix[row].length - 1 - row !== cow){
                    matrix[row][cow] = firstSum;
                }
            });
        });
    }
    console.log(matrix.map(a => a.join(' ')).join('\n'));
}
solve(['1 1 1',
    '1 1 1',
    '1 1 0']);