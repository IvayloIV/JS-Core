function solve(arr) {
    arr = arr.filter(a => a != '').map(Number);
    console.log(`<table>\n<tr><th>Price</th><th>Trend</th></tr>`);
    let prevNum = undefined;
    for(let element of arr){
        let currentNum = Number(element.toFixed(2));
        let type = "";
        if (prevNum == undefined || prevNum == currentNum){
            type = "fixed";
        } else if (prevNum < currentNum){
            type = "up";
        } else {
            type = "down";
        }
        console.log(`<tr><td>${currentNum.toFixed(2)}</td><td><img src="${type}.png"/></td></td>`);
        prevNum = currentNum;
    }
    console.log(`</table>`);
}
solve([`1`,
`1.0`,
`1.00`,
`1.001`,
`1.000001`,
`2`,
`2.0`,
`2.00`,
`2.10`,
`2.0`,
`2.10`,
`2.0`,
`1.99`,
`1.999`,
`1.99001`,
`1.99002`,
`1.99003`,
`4.00`,
`5.00`,
`342.33`,
`23.44`,
`5.22`,
`3.44`,
`7.22`,
`2`]);