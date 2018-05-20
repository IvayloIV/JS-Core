function solve(a, b, c) {
    let d = b * b - 4 * a * c;
    if (d < 0) {
        console.log('No');
    } else if (d === 0){
        console.log((b * - 1) / (2 * a));
    } else {
        console.log((b * -1 - Math.sqrt(d)) / (2 * a));
        console.log((b * -1 + Math.sqrt(d)) / (2 * a));
    }
}
solve(6, 11, -35);