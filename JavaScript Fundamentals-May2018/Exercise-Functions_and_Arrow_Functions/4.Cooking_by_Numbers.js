function solve(arr) {
    let num = arr.shift();
    let commands = {
        chop : (num) => num / 2,
        dice : (num) => Math.sqrt(num),
        spice : (num) => num + 1,
        bake : (num) => num * 3,
        fillet : (num) => num * 0.8
    };
    for (let arrElement of arr) {
        num = commands[arrElement](num);
        console.log(num);
    }
}
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);