function solve(arr) {
    arr = arr.filter(a => a != "");
    let sumsArg = {'maxSum' : Number.NEGATIVE_INFINITY, 'num1' : Number.NEGATIVE_INFINITY, 
    'num2' : Number.NEGATIVE_INFINITY, 'num3' : Number.NEGATIVE_INFINITY};
    for(let i = 2; i < arr.length - 1; i++){
        let currentElement = arr[i];
        let findingNums = /<tr><td>(?:.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/.exec(currentElement);
        let allNums = [findingNums[1].trim(), findingNums[2].trim(), findingNums[3].trim()].filter(a => a != '-').map(Number);
        if (allNums.length == 0){
            continue;
        }
        let currentSum = allNums.reduce((a, b) => a + b);
        if (currentSum > sumsArg['maxSum']){
            sumsArg = {
                'maxSum' : currentSum,
                'num1' : findingNums[1],
                'num2' : findingNums[2],
                'num3' : findingNums[3]
            };
        }
    }
    let arrOutput = [];
    let count = 0;
    for(let element of Object.keys(sumsArg)){
        if (sumsArg[element] != "-" && count != 0){
            arrOutput.push(sumsArg[element]);
        }
        count++;
    }
    if (arrOutput.every(a => a == Number.NEGATIVE_INFINITY)){
        console.log(`no data`);
    }else{
    console.log(`${sumsArg['maxSum']} = ${arrOutput.join(" + ")}`);
    }
}
solve([`<table>`,
`<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>`,
`<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>`,
`<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>`,
`<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>`,
`</table>`]);