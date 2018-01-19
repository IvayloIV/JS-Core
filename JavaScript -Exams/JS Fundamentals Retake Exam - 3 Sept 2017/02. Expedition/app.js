function expedition(matrix, replaceMatrix, points, cordinatsStart) {
    for (let cor of points) {
        let x = cor[0];
        let y = cor[1];
        for (let i = 0; i < replaceMatrix.length; i++) {
            for (let k = 0; k < replaceMatrix[i].length; k++) {
                if (isValid(x, i, y, k, matrix)) {
                    let num1 = replaceMatrix[i][k];
                    let num2 = matrix[i + x][y + k];
                    let sum = num1 + num2;
                    if (sum == 0) {
                        matrix[i + x][y + k] = 0;
                    } else if (sum == 1) {
                        matrix[i + x][y + k] = 1;
                    } else if (sum == 2) {
                        matrix[i + x][y + k] = 0;
                    }
                }
            }
        }
    }

    let count = 1;
    let x = cordinatsStart[0];
    let y = cordinatsStart[1];

    while (true) {
        let allOkey = false;
        matrix[x][y] = 1;
        if (isInside(x - 1, y, matrix)) {
            if (matrix[x - 1][y] == 0) {
                matrix[x - 1][y] = 1;
                x = x - 1;
                allOkey = true;
                count++;
                continue;
            } 
        }
        if (isInside(x + 1, y, matrix)) {
            if (matrix[x + 1][y] == 0) {
                matrix[x + 1][y] = 1;
                x = x + 1;
                allOkey = true;
                count++;
                continue;
            }
        }
        if (isInside(x, y - 1, matrix)) {
            if (matrix[x][y - 1] == 0) {
                matrix[x][y - 1] = 1;
                y = y - 1;
                allOkey = true;
                count++;
                continue;
            }
        }
        if (isInside(x, y + 1, matrix)) {
            if (matrix[x][y + 1] == 0) {
                matrix[x][y + 1] = 1;
                y = y + 1;
                allOkey = true;
                count++;
                continue;
            }
        }

        if (!allOkey) {
            break;
        } 
    }
    console.log(count)
    PrintWhereIsIt(matrix, x, y);

    function PrintWhereIsIt(matrix, x, y) {
        if (x == 0) {
            console.log("Top")
        } else if (x == matrix.length - 1) {
            console.log("Bottom");
        } else if (y == 0) {
            console.log("Left");
        } else if (y == matrix[x].length - 1) {
            console.log("Right");
        } else {
            let output = "Dead end";
            if (x >= 0 && y >= 0 && x <= (matrix.length - 1) / 2 && y <= (matrix[x].length - 1) / 2) {
                output += " 2";
            } else if (x >= 0 && x <= (matrix.length - 1) / 2 && y > (matrix[x].length - 1) / 2 && y <= matrix[x].length - 1) {
                output += " 1";
            } else if (x > (matrix.length - 1) / 2 && x <= matrix.length - 1 && y >= 0 && y <= (matrix[x].length - 1) / 2) {
                output += " 3";
            } else if (x > (matrix.length - 1) / 2 && x <= matrix.length - 1 && y > (matrix[x].length - 1) / 2 && y <= matrix[x].length - 1) {
                output += " 4";
            }
            console.log(output);
        }
    }

    function isInside(x, y, matrix) {
        return x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length;
    }

    function isValid(x, i, y, k, matrix) {
        return x + i >= 0 && x + i < matrix.length && y + k >= 0 && y + k < matrix[x + i].length;
    }
}
expedition([[1, 0, 0, 1],
[1, 0, 0, 0],
[1, 0, 0, 1],
[0, 0, 1, 1]],
    [[0, 1, 1, 0, 1],
    [1, 0, 1, 1, 0],
    [0, 1, 1, 0, 1]],
    [[0, 0],
    [3, 2],
    [3, 0],
    [2, 0]],
    [1, 0]
);