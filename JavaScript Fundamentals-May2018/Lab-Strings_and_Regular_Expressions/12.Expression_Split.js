function solve(text) {
    console.log(text.split(/[\s(),;.]+/).filter(a => a !== '').join('\n'));
}
solve('let sum = 4 * 4,b = "wow";');