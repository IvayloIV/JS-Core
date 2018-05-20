function solve(arr) {
    let [num, r] = arr;
    let zeros = Math.pow(10, r);
    let result = Math.round(num * zeros) / zeros;
    console.log(result);
}
solve([3.1415926535897932384626433832795, 2]);