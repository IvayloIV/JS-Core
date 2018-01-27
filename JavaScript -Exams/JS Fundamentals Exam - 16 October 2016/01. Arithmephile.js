function solve(arrStr){
    let arrNums = arrStr.map(Number);
    
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arrNums.length; i++) {
        let currentNum = arrNums[i];
        if (currentNum > 0 && currentNum < 10){
            let maxLength = Math.min(arrNums.length - 1, i + currentNum);
            let sum = 1;
            for (let k = i + 1; k <= maxLength; k++) {
                sum *= arrNums[k];
            }
            if (maxSum < sum){
                maxSum = sum;
            }
        }
    }
    console.log(maxSum);
}
solve(['100', '200', '2', '3', '2','3', '2', '1', '1']);