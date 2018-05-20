function solve(arr) {
    let maxNum = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (maxNum < arr[i]){
            maxNum = arr[i];
        }
    }
    console.log(maxNum);
}
solve([5, -2, 7]);