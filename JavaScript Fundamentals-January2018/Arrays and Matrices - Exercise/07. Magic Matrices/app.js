function magicMatrices(matrix) {
    for (var i = 0; i < matrix.length - 1; i++) {
        let firstSum = matrix[i].reduce((a, b) => a + b);
        let secoundSum = matrix[i + 1].reduce((a, b) => a + b);        

        if (firstSum != secoundSum) {
            return false;
        }
    }

    for (var i = 0; i < matrix[1].length - 1; i++) {
        let firstSumHoriz = 0;
        let secoundSumHoriz = 0;

        matrix.forEach(e => firstSumHoriz += e[i]);
        matrix.forEach(e => secoundSumHoriz += e[i + 1]);

        if (firstSumHoriz != secoundSumHoriz) {
            return false;
        }
    }
    return true;
}
console.log(magicMatrices([[1, 2, 3],
[2, 1, 3],
[3, 1, 2],
[1, 2, 3]]
));