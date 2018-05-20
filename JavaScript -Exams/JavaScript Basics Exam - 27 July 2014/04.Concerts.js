function solve(arr) {
    arr = arr.filter(a => a !== '');
    let book = {};
    for (let arrElement of arr) {
        let [band, town, date, venue] = arrElement.split('|').map(a => a.trim());
        if (!book.hasOwnProperty(town)){
            book[town] = {};
        }
        if (!book[town].hasOwnProperty(venue)){
            book[town][venue] = [];
        }
        if (book[town][venue].indexOf(band) === -1){
            book[town][venue].push(band);
        }
    }
    let output = {};
    for (let outputElement of Object.entries(book).sort(mySort)) {
        output[outputElement[0]] = {};
        for (let innerKey of Object.entries(outputElement[1]).sort(mySort)) {
            output[outputElement[0]][innerKey[0]] = innerKey[1].sort();
        }
    }

    console.log(JSON.stringify(output));

    function mySort(a, b) {
        if (a[0] < b[0]){
            return -1;
        } else if(a[0] > b[0]){
            return 1;
        } else {
            return 0;
        }
    }
}
solve([`ZZ Top | London | 2-Aug-2014 | Wembley Stadium`,
`Iron Maiden | London | 28-Jul-2014 | Wembley Stadium`,
`Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium`,
`Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium`,
`Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium`,
`Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium`,
`Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium`,
`Helloween | London | 28-Jul-2014 | Wembley Stadium`,
`Twisted Sister | London | 30-Sep-2014 | Wembley Stadium`,
`Metallica | London | 03-Oct-2014 | Olympic Stadium`,
`Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium`,
`Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium`]);