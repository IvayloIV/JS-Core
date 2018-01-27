function solve(arr) {
    let word = arr.shift().split('').filter(a => a != '');
    let magicSum = Number(arr.shift());

    let matrix = [];
    for (let row of arr) {
        matrix.push(row.split(' ').filter(a => a != '').map(Number));
    }

    let sumIndex = 0;
    
    for (let row = 0; row < matrix.length; row++) {
        for (let cow = 0; cow < matrix[row].length; cow++) {
            let currentNum = matrix[row][cow];

            for (let insideRow = 0; insideRow < matrix.length; insideRow++) {
                for (let insideCow = 0; insideCow < matrix[insideRow].length; insideCow++) {
                 let insideNum = matrix[insideRow][insideCow];
                 if (row == insideRow && cow == insideCow){
                     continue;
                 }
                 if (currentNum + insideNum == magicSum){
                     sumIndex = row + cow + insideRow + insideCow;
                     console.log(decryptWord(word, sumIndex));
                     return;
                 }   
                }
            }
        }
    }

    function decryptWord(word, sumIndex) {
        let repearWord = "";
        for (let i = 0; i < word.length; i++) {
            let newLetter = 0;
            if (i % 2 == 0){
                newLetter = word[i].charCodeAt(0) + sumIndex;
            }else{
                newLetter = word[i].charCodeAt(0) - sumIndex;
            }
            repearWord += String.fromCharCode(newLetter);
        }
        return repearWord;
    }
}
solve([`QqdvSpg`,
`400`,
`100 200 120`,
`120 300 310`,
`150 290 370`]);