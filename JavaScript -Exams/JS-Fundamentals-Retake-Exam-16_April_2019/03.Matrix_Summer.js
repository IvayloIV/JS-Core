function solve(matrix1, matrix2) {
    const sumMatrix = [];

    for (let row = 0; row < matrix1.length; row++) {
        let remainder = 0;
        sumMatrix[row] = [];
        for (let col = 0; col < matrix1[row].length; col++) {
            let sum = matrix1[row][col] + matrix2[row][col];
            sum += remainder;
            remainder = 0;

            if (sum >= 10) {
                remainder += sum - 9;
                sum = 9;
            }

            sumMatrix[row].push(sum);
        }

        while (remainder > 9) {
            sumMatrix[row].push(9);
            remainder -= 9;
        }

        if (remainder > 0) {
            sumMatrix[row].push(remainder)
        }
    }

    console.log(JSON.stringify(sumMatrix));
}

solve([[9, 0]], [[7, 1]]);