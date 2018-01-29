function solve(arr) {
    let book = {};

    for(let element of arr){
        let elementTokens = element.split('|');
        let color = elementTokens[0];
        if (!book.hasOwnProperty(color)){
            book[color] = {
                win : 1,
                loss : 1,
                opponents : []
            };
        }
        if (elementTokens[1] == "win"){
            book[color]['win']++;
            book[color]['opponents'].push(elementTokens[2]);
        } else if (elementTokens[1] == "loss"){
            book[color]['loss']++;
            book[color]['opponents'].push(elementTokens[2]);
        } else if (elementTokens[1] == "name"){
            book[color]['name'] = elementTokens[2];
        } else if (elementTokens[1] == "age"){
            book[color]['age'] = elementTokens[2];
        }
    }

    let currentJson = {};
    for(let key of Object.keys(book).sort()){
        if (book[key]['name'] != undefined && book[key]['age'] != undefined){
            currentJson[key] = {
                "age" : book[key]['age'],
                "name" : book[key]['name'],
                "opponents" : book[key]['opponents'].sort(),
                "rank" : (book[key]['win'] / book[key]['loss']).toFixed(2)
            }
        }
    }
    console.log(JSON.stringify(currentJson));
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