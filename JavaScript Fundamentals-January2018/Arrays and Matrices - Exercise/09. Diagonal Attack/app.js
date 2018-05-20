function diagonals(arr) {
    let matrix = [];

    for (var i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    let firstDiagSum = 0;
    let secoundDiagSum = 0;

    matrix.forEach((e, i) => firstDiagSum += e[i]);
    matrix.forEach((e, i) => secoundDiagSum += e[e.length - 1 - i]);

    if (firstDiagSum != secoundDiagSum) {
        return arr.forEach(e => console.log(e))
    }

    for (var i = 0; i < matrix.length; i++) {
        let currentRow = '';
        for (var k = 0; k < matrix[i].length; k++) {
            if (i == k || k == matrix[i].length - 1 - i) {
                currentRow += matrix[i][k] + ' ';
            } else {
                currentRow += firstDiagSum + ' ';
            }
        }
        console.log(currentRow.trim(' '));
    }
}
diagonals(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);