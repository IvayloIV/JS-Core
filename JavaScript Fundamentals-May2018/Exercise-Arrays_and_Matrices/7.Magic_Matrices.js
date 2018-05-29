function solve(matrix) {
    let sum = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        let currentSum = 0;
        for (let cow = 0; cow < matrix[row].length; cow++) {
            if (row === 0){
                let innerSum = 0;
                for (let innerRow = 0; innerRow < matrix.length; innerRow++) {
                    innerSum += matrix[innerRow][cow];
                }
                if (sum === Number.NEGATIVE_INFINITY){
                    sum = innerSum;
                } else if (sum !== innerSum){
                    return false;
                }
            }
            currentSum += matrix[row][cow];
        }
        if (sum === Number.NEGATIVE_INFINITY){
            sum = currentSum;
        } else if (sum !== currentSum){
            return false;
        }
    }
    return true;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]


));