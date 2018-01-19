function aggregateTable(arr) {
    let towns = [];
    let sum = 0;
    for (let i in arr) {
        let arrSplit = arr[i].split('|');
        towns.push(arrSplit[1].trim());
        sum += Number(arrSplit[2].trim());
    }
    console.log(towns.join(', '));
    console.log(sum);
}

function aggregateTableRegex(arr) {
    let towns = [];
    let sum = 0;
    let regex = /^\s*\|\s*(.*?)\s*\|\s*(.*)\s*$/;
    for (let currentText of arr) {
        let output = currentText.match(regex);
        towns.push(output[1]);
        sum += Number(output[2].trim());
    }
    console.log(towns.join(', '));
    console.log(sum);
}
aggregateTableRegex(['| Sofia           | 300       ',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);