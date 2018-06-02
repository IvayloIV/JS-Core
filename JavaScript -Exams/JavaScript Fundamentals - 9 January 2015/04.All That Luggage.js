function solve(arr) {
    arr = arr.filter(a => a !== '');
    let typeOfSort = arr.pop();
    let book = {};
    for (let element of arr) {
        let tokens = element.split(/\.*\*\.*/).filter(a => a !== '');
        let ownerName = tokens[0];
        let luggageName = tokens[1];
        let isFood = tokens[2];
        let isDrink = tokens[3];
        let fragile = tokens[4];
        let kg = Number(tokens[5]);
        let transferredWith = tokens[6];
        if (!book.hasOwnProperty(ownerName)){
            book[ownerName] = {};
        }
        book[ownerName][luggageName] = {
            kg,
            fragile : fragile === 'true',
            type: getType(isFood, isDrink),
            transferredWith
        };
    }

    let result = {};
    for (let outElements of Object.entries(book)) {
        let ownerName = outElements[0];
        if (!result.hasOwnProperty(ownerName)){
            result[ownerName] = {};
        }
        for (let innerElements of Object.entries(outElements[1]).sort(mySort)) {
            result[ownerName][innerElements[0]] = innerElements[1];
        }
    }

    console.log(JSON.stringify(result));

    function mySort(a, b) {
        if (typeOfSort === 'luggage name') {
            if (a[0] < b[0]){
                return -1;
            } else if (a[0] > b[0]){
                return 1;
            } else {
                return 0;
            }
        } else if (typeOfSort === 'weight') {
            return a[1]['kg'] - b[1]['kg'];
        }
        return 0;
    }

    function getType(isFood, isDrink) {
        if (isFood === 'true') {
            return 'food';
        } else if (isDrink === 'true') {
            return 'drink';
        }
        return 'other';
    }
}
solve([`Yana Slavcheva*....clothes*....false*....false*....false*....2.2*....backpack`,
`Kiko*....socks*....false*....false*....false*....0.2*....backpack`,
`Kiko*....sticks*....false*....false*....false*....1.6*....ATV`,
`Kiko*....sheets*....false*....false*....false*....3.6*....backpack`,
`Kiko*....banana*....true*....false*....false*....3.2*....backpack`,
`Kiko*....glasses*....false*....false*....true*....0.2*....ATV`,
`Kiko*....glasses*....false*....false*....true*....3*....ATV`,
`Manov*....socks*....false*....false*....false*....0.3*....ATV`,
`luggage name`]);