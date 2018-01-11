function quadraticEquation(a, b, c) {
    let rr = Math.sqrt(-2);
    let d = b * b - 4 * a * c;

    if (d < 0) {
        console.log("no");
    }
    else if (d == 0) {
        let x1 = (b * -1) / (2 * a);
        console.log(x1);
    }
    else if (d > 0) {
        let x1 = ((b * - 1) + Math.sqrt(d)) / (2 * a);
        let x2 = ((b * - 1) - Math.sqrt(d)) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    }
}
quadraticEquation(6, 11, -35);