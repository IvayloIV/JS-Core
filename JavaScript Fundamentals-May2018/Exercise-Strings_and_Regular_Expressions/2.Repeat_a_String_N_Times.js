function solve(str, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

let solve2 = (str, n) => str.repeat(n);

console.log(solve2('repeat', 5));