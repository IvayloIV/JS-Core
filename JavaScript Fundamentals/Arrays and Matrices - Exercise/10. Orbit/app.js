function orbit(arr) {
    let [weidth, height, x, y] = arr;
    let matrix = [];

    for (var i = 0; i < height; i++) {
        matrix.push('0'.repeat(weidth).split('').map(Number));
    }

    matrix[x][y] = 1;

    let num = 1;
    while (true) {
        let isOkey = false;

        let rowMin = Math.max(0, x - num);
        let rowMax = Math.min(matrix.length - 1, x + num);
        let cowMin = Math.max(0, y - num);
        let cowMax = Math.min(matrix.length - 1, y + num);

        num++;
        for (var i = rowMin; i <= rowMax; i++) {
            for (var k = cowMin; k <= cowMax; k++) {
                if (matrix[i][k] == 0) {
                    matrix[i][k] = num;
                    isOkey = true;
                }
            }
        }

        if (!isOkey) {
            break;
        }
    }
    matrix.map(a => console.log(a.join(' ')));
}
orbit([4, 4, 0, 0]);