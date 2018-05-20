function solve(arr) {
    let rotate = arr.shift();
    let leftBracket = rotate.indexOf('(');
    let rightBracket = rotate.indexOf(')');
    let degree = Number(rotate.substring(leftBracket + 1, rightBracket)) % 360;

    let maxLength = 0;
    arr.forEach(e => {
        let tokensL = e.split('').length;
        if (maxLength < tokensL){
            maxLength = tokensL;
        }
    });
    let matrix = [];
    arr.forEach(e => {
        let tokens = e.split('');
        let helper = [];
        for (let i = 0; i < maxLength; i++) {
            if (i > tokens.length - 1){
                helper.push(' ');
            } else {
                helper.push(tokens[i]);
            }
        }
        matrix.push(helper);
    });

    if (degree === 0){
        for (let row = 0; row < matrix.length; row++) {
            let result = '';
            for (let cow = 0; cow < matrix[row].length; cow++) {
                result += matrix[row][cow];
            }
            console.log(result);
        }
    } else if (degree === 180){
        for (let row = matrix.length - 1; row >= 0; row--) {
            let result = '';
            for (let cow = maxLength - 1; cow >= 0; cow--) {
                result += matrix[row][cow];
            }
            console.log(result);
        }
    } else if (degree === 90){
        for (let cow = 0; cow < maxLength; cow++) {
            let result = '';
            for (let row = matrix.length - 1; row >= 0; row--) {
                result += matrix[row][cow];
            }
            console.log(result);
        }
    } else if (degree === 270){
        for (let cow = maxLength - 1; cow >= 0; cow--) {
            let result = '';
            for (let row = 0; row < matrix.length; row++) {
                result += matrix[row][cow];
            }
            console.log(result);
        }
    }
}
solve([`Rotate(360)`,
`hello`,
`maraba`]);