function solve(arr) {
    let lengthSequnce = Number(arr.pop());
    let matrix = [];
    arr.forEach((e) => {
       matrix.push(e.split(' ').filter(a => a !== ''));
    });
    for (let row = 0; row < matrix.length; row++) {
        for (let cow = 0; cow < matrix[row].length; cow++) {
            let currentStr = matrix[row][cow];
            let n = lengthSequnce;
            let innerRow = row;
            let innerCow = cow;
            let isHaveMatch = true;
            while (n !== 1) {
                innerCow++;
                if (innerCow > matrix[innerRow].length - 1){
                    innerCow = 0;
                    innerRow++;
                }
                if (!isInside(matrix, innerRow)){
                    isHaveMatch = false;
                    break;
                }
                if (currentStr !== matrix[innerRow][innerCow]){
                    isHaveMatch = false;
                    break;
                }
                n--;
            }
            if (isHaveMatch) {
                transformMatrix(row, cow, matrix, lengthSequnce);
            }
        }
    }

    for (let row of matrix) {
        let currentRow = row.filter(a => a !== 'Haha');
        if (currentRow.length === 0){
            console.log(`(empty)`);
        } else {
            console.log(currentRow.join(' '));
        }
    }

    function transformMatrix(currentRow, currentCow, matrix, currentN) {
        matrix[currentRow][currentCow] = 'Haha';
        while (currentN !== 1){
            currentCow++;
            if (currentCow > matrix[currentRow].length - 1){
                currentCow = 0;
                currentRow++;
            }
            matrix[currentRow][currentCow] = 'Haha';
            currentN--;
        }
    }
    function isInside(matrix, innerRow) {
        return innerRow <= matrix.length - 1;
    }
}
solve([`1 2 3 3 2 1`,
`5 2 2 1 1 0`,
`3 3 1 3 3`,
`2`]);