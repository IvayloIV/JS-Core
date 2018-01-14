function spiralMatrix(x, y) {
    let matrix = [];

    for (var i = 0; i < y; i++) {
        matrix.push('0'.repeat(x).split('').map(Number));
    }

    let num = 1;
    let count = 0;
    let iterRow = 0;
    let iterCow = x - 1;
    while (true) {
        let startRow = count;
        let endRow = matrix.length - count;

        for (var i = startRow; i < endRow; i++) {
            if (matrix[iterRow][i] == 0) {
                matrix[iterRow][i] = num;
                num++;
            }
        }

        for (var i = startRow; i < endRow; i++) {
            if (matrix[i][iterCow] == 0) {
                matrix[i][iterCow] = num;
                num++;
            }
        }

        for (var i = endRow - 1; i >= startRow; i--) {
            if (matrix[endRow - 1][i] == 0) {
                matrix[endRow - 1][i] = num;
                num++;
            }
        }

        for (var i = endRow - 1; i >= startRow; i--) {
            if (matrix[i][startRow] == 0) {
                matrix[i][startRow] = num;
                num++;
            }
        }
        if (num >= x * y + 1) {
            break;
        }

        count++;
        iterRow++;
        iterCow--;
    }
    matrix.forEach(a => console.log(a.join(' ')));
}
spiralMatrix(3, 3);