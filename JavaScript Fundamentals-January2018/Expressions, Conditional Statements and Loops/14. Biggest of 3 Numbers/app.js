function biggestNum(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (max < currentNum) {
            max = currentNum;
        }
    }
    console.log(max);
    //console.log(Math.max(arr[0], arr[1], arr[2]));
}
biggestNum([5, -2, 7]);
