function diagonalSums(arr) {
    let first = 0;
    let secound = 0;

    for (var i = 0; i < arr.length; i++) {
        first += arr[i][i];
        secound += arr[i][arr[i].length - 1 - i];
    }
    console.log(`${first} ${secound}`);
}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);