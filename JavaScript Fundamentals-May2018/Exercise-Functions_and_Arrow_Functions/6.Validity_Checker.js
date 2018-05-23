function solve(arr) {
    let [x1, y1, x2, y2] = arr;
    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);

    function isValid(x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1- y2, 2));
        if (result % 1 === 0){
            printResult(x1, y1, x2, y2, 'valid');
        } else {
            printResult(x1, y1, x2, y2, 'invalid');
        }
    }

    function printResult(x1, y1, x2, y2, isValid) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
    }
}
solve([2, 1, 1, 1]);