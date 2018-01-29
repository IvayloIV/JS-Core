function solve(arr) {
    let book = new Map();

    for(let element of arr){
        let elementTokens = element.split('|');
        if (!book.has(elementTokens[0])){
            book.set(elementTokens[0], ["", "", [], 1, 1]);
        }
        if (elementTokens[1] == "win"){
            book.get(elementTokens[0])[3]++;
            book.get(elementTokens[0])[2].push(elementTokens[2]);
        } else if (elementTokens[1] == "loss"){
            book.get(elementTokens[0])[4]++;
            book.get(elementTokens[0])[2].push(elementTokens[2]);
        } else if (elementTokens[1] == "name"){
            book.get(elementTokens[0])[0] = elementTokens[2];
        } else if (elementTokens[1] == "age"){
            book.get(elementTokens[0])[1] = elementTokens[2];
        }
    }

    let currentJson = {};
    for(let element of [...book].sort(mySort)){
        let totalElements = element[1];
        if (totalElements[0] == "" || totalElements[1] == ""){
            continue;
        }
        let sortedOponents = totalElements[2].sort();
        let rank = `${(totalElements[3] / totalElements[4]).toFixed(2)}`;
        currentJson[element[0]] = {'age':totalElements[1], 'name':totalElements[0], 'opponents':sortedOponents, 'rank':rank};
    }
    console.log(JSON.stringify(currentJson));

    function mySort(a, b){
        if (a[0] < b[0]){
            return -1;
        } else if (a[0] > b[0]){
            return 1;
        } else {
            return 0;
        }
    }
}
solve([`purple|age|99`,
`red|age|44`,
`blue|win|pesho`,
`blue|win|mariya`,
`purple|loss|Kiko`,
`purple|loss|Kiko`,
`purple|loss|Kiko`,
`purple|loss|Yana`,
`purple|loss|Yana`,
`purple|loss|Manov`,
`purple|loss|Manov`,
`red|name|gosho`,
`blue|win|Vladko`,
`purple|loss|Yana`,
`purple|name|VladoKaramfilov`,
`blue|age|21`,
`blue|loss|Pesho`]);