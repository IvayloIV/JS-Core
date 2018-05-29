function solve([width, height, x, y]) {
    let matrix = [];
    for (let row = 0; row < width; row++) {
        let innerMatrix = [];
        for (let cow = 0; cow < height; cow++) {
            innerMatrix.push(0);
        }
        matrix.push(innerMatrix);
    }

    let count = 1;
    matrix[x][y] = count;
    while (true){
        let startRow = Math.max(0, x - count);
        let endRow = Math.min(matrix.length - 1, x + count);
        let startCow = Math.max(0, y - count);
        let endCow = Math.min(matrix[startRow].length - 1, y + count);

        count++;
        let isEmpty = true;
        for (let row = startRow; row <= endRow; row++) {
            for (let cow = startCow; cow <= endCow; cow++) {
                if (matrix[row][cow] === 0) {
                    matrix[row][cow] = count;
                    isEmpty = false;
                }
            }
        }
        if (isEmpty){
            break;
        }
    }
    console.log(matrix.map(a => a.join(' ')).join('\n'));
}
solve([5, 5, 2, 2]);