function solve(arr) {
    let result = [];
    arr.forEach((e, i) => {
        if (e < 0){
            result.unshift(e);
        } else {
            result.push(e);
        }
    });
    return result.join('\n');
}

console.log(solve([7, -2, 8, 9]));