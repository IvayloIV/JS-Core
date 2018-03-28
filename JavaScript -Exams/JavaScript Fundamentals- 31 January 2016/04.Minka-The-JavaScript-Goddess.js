function solve(arr) {
    arr = arr.filter(a => a !== '');
    let book = {};
    for (let element of arr) {
        let tokens = element.split('&').map(a => a.trim()).filter(a => a !== '');
        let name = tokens[0];
        let type = tokens[1];
        let taskNumber = Number(tokens[2]);
        let score = Number(tokens[3]);
        let linesOfCodes = Number(tokens[4]);
        if (!book.hasOwnProperty(taskNumber)){
            book[taskNumber] = {
                'tasks' : [],
                'average' : 0,
                'lines' : 0
            };
        }
        book[taskNumber]['tasks'].push({
            'name' : name,
            'type' : type
        });
        book[taskNumber]['average'] += score;
        book[taskNumber]['lines'] += linesOfCodes;
    }

    let outputObj = {};
    for (let element of Object.entries(book).sort(mySort)) {
        let average = element[1]['average'] / element[1]['tasks'].length;
        outputObj['Task ' + element[0]] = {
          'tasks' : [],
          'average' : Number(average.toFixed(2)),
          'lines' : element[1]['lines']
        };
        let t = Object.entries(element[1]['tasks']);
        Object.values(element[1]['tasks']).sort((a,b) => a['name'].localeCompare(b['name'])).forEach((e) => {
            outputObj['Task ' + element[0]]['tasks'].push({
                'name' : e['name'],
                'type' : e['type']
            });
        });
    }

    console.log(JSON.stringify(outputObj));

    function mySort(a, b) {
        let averageFirst = a[1]['average'] / a[1]['tasks'].length;
        let averageSecond = b[1]['average'] / b[1]['tasks'].length;

        if (averageFirst !== averageSecond){
            return averageSecond - averageFirst;
        }
        return a[1]['lines'] - b[1]['lines'];
    }
}
solve([`Array Matcher & strings & 4 & 100 & 38`,
`Magic Wand & draw & 3 & 100 & 15`,
`Dream Item & loops & 2 & 88 & 80`,
`Knight Path & bits & 5 & 100 & 65`,
`Basket Battle & conditionals & 2 & 100 & 120`,
`Torrent Pirate & calculations & 1 & 100 & 20`,
`Encrypted Matrix & nested loops & 4 & 90 & 52`,
`Game of bits & bits & 5 &  100 & 18`,
`Fit box in box & conditionals & 1 & 100 & 95`,
`Disk & draw & 3 & 90 & 15`,
`Poker Straight & nested loops & 4 & 40 & 57`,
`Friend Bits & bits & 5 & 100 & 81`]);