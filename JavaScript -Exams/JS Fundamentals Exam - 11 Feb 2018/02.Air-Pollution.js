function solve(arrs, commands) {
    let matrix = [];
    for (let arr of arrs) {
        matrix.push(arr.split(" ").map(Number));
    }

    let myCommands = {breeze, gale, smog};
    for (let command of commands) {
        let tokens = command.split(' ');
        matrix = myCommands[tokens[0]](matrix, Number(tokens[1]));
    }
    let pollution = calculatePollution(matrix);

    console.log(pollution.length === 0 ? "No polluted areas" : `Polluted areas: ${pollution.join(', ')}`);

    function calculatePollution(matrix) {
        let result = [];
        for (let row = 0; row < matrix.length; row++) {
            for (let cow = 0; cow < matrix.length; cow++) {
                if (matrix[row][cow] >= 50){
                    result.push(`[${row}-${cow}]`);
                }
            }
        }
        return result;
    }
    function breeze(matrix, row) {
        for (let i = 0; i < matrix[row].length; i++) {
            matrix[row][i] = Math.max(0, matrix[row][i] - 15)
        }
        return matrix;
    }
    function gale(matrix, cow) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][cow] = Math.max(0, matrix[i][cow] - 20)
        }
        return matrix;
    }
    function smog(matrix, n) {
        return matrix.map(a => a.map(b => b + n));
    }
}
solve([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]);