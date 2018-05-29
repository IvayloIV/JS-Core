function solve(row, cow) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        for (let j = 0; j < cow; j++) {
            matrix[i][j] = 0;
        }
    }

    let counter = 1;
    let currentRow = 0;
    let currentCow = 0;
    while (true){
        let isFull = true;
        for (let upper = currentRow; upper < matrix[currentRow].length; upper++) {
            if (matrix[currentRow][upper] === 0){
            matrix[currentRow][upper] = counter++;
            isFull = false;
            }
        }
        for (let right = currentCow; right < matrix.length; right++) {
            if (matrix[right][matrix[right].length - 1 - currentCow] === 0) {
                matrix[right][matrix[right].length - 1 - currentCow] = counter++;
                isFull = false;
            }
        }
        for (let bottom = matrix.length - 1 - currentRow; bottom >= currentRow; bottom--) {
            if ( matrix[matrix.length - 1 - currentRow][bottom] === 0){
                matrix[matrix.length - 1 - currentRow][bottom] = counter++;
                isFull = false;
            }
        }
        for (let left = matrix.length - 1 - currentCow; left >= currentCow; left--) {
            if (matrix[left][currentCow] === 0) {
                matrix[left][currentCow] = counter++;
                isFull = false;
            }
        }
        if (isFull){
            break;
        }
        currentRow++;
        currentCow++;
    }
    console.log(matrix.map(a => a.join(' ')).join('\n'));
}
solve(4, 5);