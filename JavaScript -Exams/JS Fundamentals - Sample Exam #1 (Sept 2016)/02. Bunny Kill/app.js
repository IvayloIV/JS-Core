function bunnyKills(arr) {
    let matrix = [];
    for (let i = 0; i < arr.length - 1; i++) {
        matrix.push(arr[i].split(" ").map(Number));
    }

    let bombs = arr[arr.length - 1].split(" ");

    let sum = 0;
    let count = 0;
    for (let currentBomb of bombs) {
        let [x, y] = currentBomb.split(",").map(Number);


        if (matrix[x][y] <= 0) {
            continue;
        }
        count++;
        sum += matrix[x][y];

        let minRow = Math.max(0, x - 1);
        let maxRow = Math.min(matrix.length - 1, x + 1);
        let minCow = Math.max(0, y - 1);
        let maxCow = Math.min(matrix[x].length - 1, y + 1);

        let powerBomb = matrix[x][y];
        for (let i = minRow; i <= maxRow; i++) {
            for (let k = minCow; k <= maxCow; k++) {
                    matrix[i][k] -= powerBomb;
            }
        }
    }


    for (var i = 0; i < matrix.length; i++) {
        for (var k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] > 0) {
                sum += matrix[i][k];
                count++;
            }
        }
    }

    console.log(sum);
    console.log(count);
}
bunnyKills(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10','2,2 0,1']);