function cookingNumbers(arr) {
    let chop = function (num) { return num / 2 };
    let dice = a => Math.sqrt(a);
    let spice = a => a + 1;
    let bake = a => a * 3;
    let fillter = a => a * 0.8;

    function findCommand(num, command) {
        switch (command) {
            case 'chop': return chop(num);
            case 'dice': return dice(num);
            case 'spice': return spice(num);
            case 'bake': return bake(num);
            case 'fillet': return fillter(num);
        }
    }

    let num = arr[0];

    for (var i = 1; i < arr.length; i++) {
        let command = arr[i];
        num = findCommand(num, command);
        console.log(num);
    }
}
cookingNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
