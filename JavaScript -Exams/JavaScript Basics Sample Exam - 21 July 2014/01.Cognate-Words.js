function solve(arr) {
    let text = arr[0];
    let words = text.match(/[a-zA-Z]+/g);
    let allPairs = [];
    if (words === null || words.length < 3){
        console.log(`No`);
        return;
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            for (let k = 0; k < words.length; k++) {
                if (words[i] === words[j] + words[k]){
                    let printFormat = `${words[j]}|${words[k]}=${words[i]}`;
                    if (allPairs.indexOf(printFormat) === -1){
                        allPairs.push(printFormat);
                    }
                }
            }
        }
    }
    console.log(allPairs.length === 0 ? 'No' : allPairs.join('\n'));
}

solve([`ho ho hoho`]);