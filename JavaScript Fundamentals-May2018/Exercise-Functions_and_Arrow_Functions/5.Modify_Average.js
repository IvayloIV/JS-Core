function solve(num) {
    let numStr = num.toString();
    while (getSumOfNums(numStr) / numStr.length <= 5){
        numStr += '9';
    }
    console.log(numStr);
    function getSumOfNums(numStr) {
        let sum = 0;
        for (let numStrElement of numStr) {
            sum += Number(numStrElement);
        }
        return sum;
    }
}
solve(5835);