function solve(arr){
    let book = new Map();
    for(let element of arr){
        let matchWords = /([A-Za-z]+)\s*([A-Za-z]+)\s*vs\.\s*([A-Za-z]+)\s*([A-Za-z]+)\s*\:\s*(.*?)$/.exec(element);
        let name1 = `${matchWords[1]} ${matchWords[2]}`;
        let name2 = `${matchWords[3]} ${matchWords[4]}`;
        let allResults = matchWords[5].split(/\s+/).filter(a => a != "");

        if (!book.has(name1)){
            book.set(name1, [0, 0, 0, 0, 0, 0]);
        }
        if (!book.has(name2)){
            book.set(name2, [0, 0, 0, 0, 0, 0]);
        }

        let countSets1 = 0;
        let countSets2 = 0;
        let countWinsSets1 = 0;
        let countWinsSets2 = 0;
        for(let currentResult of allResults){
            let tokenResult = currentResult.split(/\-/).filter(a => a != "").map(a => a.trim()).map(Number);
            let firstNameScore = tokenResult[0];
            let secondNameScore = tokenResult[1];

            if (firstNameScore > secondNameScore){
                countWinsSets1++;
            } else {
                countWinsSets2++;               
            }
            countSets1 += firstNameScore;
            countSets2 += secondNameScore;
        }
        if (countWinsSets1 > countWinsSets2) {
            book.get(name1)[0]++;
            book.get(name2)[1]++;
        } else{
            book.get(name1)[1]++;           
            book.get(name2)[0]++;           
        }
            book.get(name1)[2] += countWinsSets1;
            book.get(name1)[3] += countWinsSets2;
            book.get(name1)[4] += countSets1;
            book.get(name1)[5] += countSets2;

            book.get(name2)[2] += countWinsSets2;
            book.get(name2)[3] += countWinsSets1;
            book.get(name2)[4] += countSets2;
            book.get(name2)[5] += countSets1;
    }
    let sortedBook = [...book].sort(mySort);

    let outputJson = [];
    for(let people of sortedBook){
        outputJson.push({"name":people[0],"matchesWon":people[1][0],"matchesLost":people[1][1],
        "setsWon":people[1][2],"setsLost":people[1][3],"gamesWon":people[1][4],"gamesLost":people[1][5]});
    }
    console.log(JSON.stringify(outputJson));

    function mySort(a, b){
        let nameFirst = a[0];
        let nameSecond = b[0];
        let resultFirst = a[1];
        let resultSecond = b[1];

        if (resultFirst[0] < resultSecond[0]){
            return 1;
        } else if (resultFirst[0] < resultSecond[0]){
            return -1;
        } else {
            if (resultFirst[2] < resultSecond[2]){
                return 1;
            } else if (resultFirst[2] > resultSecond[2]){
                return -1;
            } else {
                if (resultFirst[4] < resultSecond[4]){
                    return 1;
                } else if (resultFirst[4] > resultSecond[4]){
                    return -1;
                } else {
                    return nameFirst.localeCompare(nameSecond);
                }
            }
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