function figure(n) {
    let length = n % 2 == 0 ? n - 1 : n
    let middle = Math.ceil(length / 2);
    for (var i = 1; i <= length; i++) {
        if (i == 1 || i == length || i == middle) {
            console.log(`+${'-'.repeat(n - 2)}+${'-'.repeat(n - 2)}+`);
        }
        else {
            console.log(`|${' '.repeat(n - 2)}|${' '.repeat(n - 2)}|`);
        }
    }
}
figure(25);