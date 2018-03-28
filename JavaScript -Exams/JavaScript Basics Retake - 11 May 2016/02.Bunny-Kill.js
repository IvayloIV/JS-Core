function solve(arr) {
    arr = arr.filter(a => a !== '');
    let bombs = arr.pop().split(' ');
    let matrix = [];
    for (let e of arr) {
        matrix.push(e.split(' ').map(Number));
    }

    let sum = 0;
    let count = 0;
    for (let bomb of bombs) {
        let [x, y] = bomb.split(',').map(Number);
        if (matrix[x][y] === 0) continue;
        let minX = Math.max(0, x - 1);
        let maxX = Math.min(matrix.length - 1, x + 1);
        let minY = Math.max(0, y - 1);
        let maxY = Math.min(matrix[x].length - 1, y + 1);

        let currentBombPower = matrix[x][y];
        sum += matrix[x][y];
        count++;
        matrix[x][y] = 0;
        for (let row = minX; row <= maxX; row++) {
            for (let cow = minY; cow <= maxY; cow++) {
                matrix[row][cow] = Math.max(0, matrix[row][cow] - currentBombPower);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let cow = 0; cow < matrix[row].length; cow++) {
            if (matrix[row][cow] > 0) {
                sum += matrix[row][cow];
                count++;
            }
        }
    }
    console.log(sum);
    console.log(count);
}
solve([`5 10 15 20`,
`10 10 10 10`,
`10 15 10 10`,
`10 10 10 10`,
`2,2 0,1`]);