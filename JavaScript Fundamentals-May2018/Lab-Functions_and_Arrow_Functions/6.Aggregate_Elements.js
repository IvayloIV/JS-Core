function solve(arr) {
    console.log(transform(arr, 0, (a, b) => a + b));
    console.log(transform(arr, 0, (a, b) => a + 1 / b));
    console.log(transform(arr, '', (a, b) => a + b));

    function transform(arr, result, func) {
        for (let i = 0; i < arr.length; i++) {
            result = func(result, arr[i]);
        }
        return result;
    }
}
solve([10, 20, 30]);