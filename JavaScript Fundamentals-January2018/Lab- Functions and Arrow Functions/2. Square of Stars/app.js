function squareOfStars(n = 5) {
    function printStars(count = n) {
        return "*" + " *".repeat(n - 1);
    }

    for (var i = 1; i <= n; i++) {
        console.log(printStars(n));
    }
}
squareOfStars(1);