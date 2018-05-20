function triangleOfDollars(n) {
    let count = 1;
    for (var i = 0; i < n; i++) {
        console.log('$'.repeat(count));
        count++;
    }
}
triangleOfDollars(4);