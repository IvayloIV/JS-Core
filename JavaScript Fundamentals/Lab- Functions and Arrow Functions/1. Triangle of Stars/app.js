function triangle(n) {
    let f = i => "*".repeat(i);

    for (let i = 1; i <= n; i++) {
        console.log(f(i));
    }
    for (let i = n - 1; i >= 1; i--) {
        console.log(f(i));
    }
}
triangle(5);