function solve(arr) {
    let matrix = [];
    let outputMatrix = [];
    for(let element of arr){
        matrix.push(element.toLowerCase().split(''));
        outputMatrix.push(element.split(''));
    }

    for(let row = 0; row < matrix.length - 2; row++){
        for(let cow = 0; cow < matrix[row].length; cow++){
            if (matrix[row + 1].length <= cow || matrix[row + 2] <= cow){
                break;
            }
            if (matrix[row][cow] == matrix[row][cow + 2] && matrix[row][cow] == matrix[row + 1][cow + 1] && matrix[row][cow] == matrix[row + 2][cow] && matrix[row + 2][cow + 2] == matrix[row][cow]){
                outputMatrix[row][cow] = '';
                outputMatrix[row][cow + 2] = '';
                outputMatrix[row + 1][cow + 1] = '';
                outputMatrix[row + 2][cow] = '';
                outputMatrix[row + 2][cow + 2] = '';
            }
        }
    }
    for(let element of outputMatrix){
        console.log(element.filter(a => a != '').join(''));
    }
}
solve([`puoUdai`,
`miU`,
`ausupirina`,
`8n8i8`,
`m8o8a`,
`8l8o860`,
`M8i8`,
`8e8!8?!
`]);