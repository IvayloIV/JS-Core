function solve(arr) {
    arr = arr.filter(a => a !== '');
    let book = {};
    for (let element of arr) {
        let tokens = element.split(/vs\.|:/).filter(a => a !== '').map(a => a.trim());
        let player1Name = tokens[0].replace(/\s+/, ' ');
        let player2Name = tokens[1].replace(/\s+/, ' ');
        let tokensResult = tokens[2].split(/\s+/).filter(a => a !== '');
        checkBookForName(player1Name);
        checkBookForName(player2Name);
        let win1Sets = 0;
        let win2Sets = 0;
        for (let i = 0; i < tokensResult.length; i++) {
            let currentResultTokens = tokensResult[i].split('-').map(Number);
            let player1Result = currentResultTokens[0];
            let player2Result = currentResultTokens[1];
            changeGamesForPlayer(player1Name, player1Result, player2Result);
            changeGamesForPlayer(player2Name, player2Result, player1Result);
            if (player1Result > player2Result) {
                win1Sets++;
            } else if (player1Result < player2Result){
                win2Sets++
            }
        }
        changeSetForPlayer(player1Name, win1Sets, win2Sets);
        changeSetForPlayer(player2Name, win2Sets, win1Sets);
        if (win1Sets > win2Sets){
            changeMatchesForPlayer(player1Name, player2Name);
        } else if (win1Sets < win2Sets){
            changeMatchesForPlayer(player2Name, player1Name);
        }
    }

    let result = [];
    for (let elements of Object.entries(book).sort(mySort)) {
        result.push({
            name : elements[0],
            matchesWon : elements[1]['matchesWon'],
            matchesLost : elements[1]['matchesLost'],
            setsWon : elements[1]['setsWon'],
            setsLost : elements[1]['setsLost'],
            gamesWon : elements[1]['gamesWon'],
            gamesLost : elements[1]['gamesLost']
        });
    }

    console.log(JSON.stringify(result));

    function mySort(a, b) {
        if (a[1]['matchesWon'] !== b[1]['matchesWon']){
            return b[1]['matchesWon'] - a[1]['matchesWon'];
        } else if (a[1]['setsWon'] !== b[1]['setsWon']) {
            return b[1]['setsWon'] - a[1]['setsWon'];
        } else if (a[1]['gamesWon'] !== b[1]['gamesWon']) {
            return b[1]['gamesWon'] - a[1]['gamesWon'];
        } else {
            return a[0].localeCompare(b[0]);
        }
    }

    function changeMatchesForPlayer(player1Name, player2Name) {
        book[player1Name]['matchesWon']++;
        book[player2Name]['matchesLost']++;
    }

    function changeSetForPlayer(player1Name, wins, losses) {
        book[player1Name]['setsWon'] += wins;
        book[player1Name]['setsLost'] += losses;
    }

    function changeGamesForPlayer(player1Name, player1Result, player2Result) {
        book[player1Name]['gamesWon'] += player1Result;
        book[player1Name]['gamesLost'] += player2Result;
    }

    function checkBookForName(name) {
        if (!book.hasOwnProperty(name)){
            book[name] = {
                matchesWon : 0,
                matchesLost : 0,
                setsWon : 0,
                setsLost : 0,
                gamesWon : 0,
                gamesLost : 0
            };
        }
    }
}
solve([ 'Novak Djokovic vs. Roger Federer : 6-3 6-3',
'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
'Andy Murray vs. David Ferrer : 6-4 7-6',
'Tomas Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
'Pete Sampras vs. Andre Agassi : 2-1',
'Boris Beckervs.Andre          Agassi:2-1' ]
);