function solve(arr) {
    return arr.filter((a, i) => i % 2 === 0).join(' ');
}

console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));