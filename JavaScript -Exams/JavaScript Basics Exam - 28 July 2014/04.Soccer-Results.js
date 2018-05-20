function solve(arr) {
    arr = arr.filter(a => a !== '');
    let book = {};
    for (let element of arr) {
        let tokens = element.split(/[\/:-]/).map(a => a.trim());
        let firstTeamName = tokens[0];
        let secondTeamName = tokens[1];
        let firstTeamResult = Number(tokens[2]);
        let secondTeamResult = Number(tokens[3]);

        book = addToResult(firstTeamName, secondTeamName, firstTeamResult, secondTeamResult, book);
        book = addToResult(secondTeamName, firstTeamName, secondTeamResult, firstTeamResult, book);
    }

    let result = {};
    for (let bookElement of Object.entries(book).sort(mySort)) {
        result[bookElement[0]] = {
            'goalsScored' : bookElement[1]['goalsScored'],
            'goalsConceded' : bookElement[1]['goalsConceded'],
            'matchesPlayedWith' : bookElement[1]['matchesPlayedWith'].sort()
        };
    }

    console.log(JSON.stringify(result));

    function mySort(a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    }
    function addToResult(firstTeamName, secondTeamName, firstTeamResult, secondTeamResult, book) {
        if(!book.hasOwnProperty(firstTeamName)){
            book[firstTeamName] = {
                'goalsScored' : 0,
                'goalsConceded' : 0,
                'matchesPlayedWith' : []
            };
        }
        book[firstTeamName]['goalsScored'] += firstTeamResult;
        book[firstTeamName]['goalsConceded'] += secondTeamResult;
        if (book[firstTeamName]['matchesPlayedWith'].indexOf(secondTeamName) < 0){
            book[firstTeamName]['matchesPlayedWith'].push(secondTeamName);
        }
        return book;
    }
}

solve([`Germany / Argentina: 1-0`,
`Brazil / Netherlands: 0-3`,
`Netherlands / Argentina: 0-0`,
`Brazil / Germany: 1-7`,
`Argentina / Belgium: 1-0`,
`Netherlands / Costa Rica: 0-0`,
`France / Germany: 0-1`,
`Brazil / Colombia: 2-1`]);