function solve(arr) {
    let [start, end] = arr.filter(a => a !== '').map(Number);
    let result = '<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';

    for (let i = start; i <= end; i++) {
        result += `<tr><td>${i}</td><td>${i * i}</td><td>${isFibNum(i)}</td></tr>\n`;
    }

    result += `</table>`;
    console.log(result);

    function isFibNum(i) {
        let num1 = 1;
        let num2 = 1;
        while (num1 <= i){
            let temp = num1 + num2;
            num1 = num2;
            num2 = temp;
            if (num1 === i){
                return `yes`;
            }
        }
        return `no`;
    }
}
solve(['1', '1']);