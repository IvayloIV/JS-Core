function solve(arr) {
    let matrix = [];
    let outputMatrix = [];
    for(let element of arr){
        matrix.push(element.split('').map(a => a.toLowerCase()));
        outputMatrix.push(element.split(''));
    }

    for(let row = 0; row < arr.length - 2; row++){
        for(let cow = 1; cow < matrix[row].length; cow++){
            if (cow >= matrix[row + 1].length - 1 || cow > matrix[row + 2].length - 1){
                continue;
            }
            if (matrix[row][cow] == matrix[row + 1][cow - 1] && 
                matrix[row + 1][cow] == matrix[row][cow] && 
                matrix[row][cow] == matrix[row + 1][cow + 1] && 
                matrix[row][cow] == matrix[row + 2][cow]){
                outputMatrix[row][cow] = "";
                outputMatrix[row + 1][cow - 1] = "";
                outputMatrix[row + 1][cow] = "";
                outputMatrix[row + 1][cow + 1] = "";
                outputMatrix[row + 2][cow] = "";
            }
        }
    }
    for(let element of outputMatrix){
        console.log(element.filter(a => a != '').join(''));
    }
}
solve([`@s@a@p@una`,
`p@@@@@@@@dna`,
`@6@t@*@*ego`,
`vdig*****ne6`,
`li??^*^*
`]);