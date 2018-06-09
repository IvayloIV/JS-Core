function solve(arr) {
    let book = {};
    for (let element of arr) {
        if (!book.hasOwnProperty(element.system)){
            book[element.system] = {};
        }
        if (!book[element.system].hasOwnProperty(element.candidate)) {
            book[element.system][element.candidate] = 0
        }
        book[element.system][element.candidate] += Number(element.votes);
    }

    let winners = {};
    let allVotes = 0;
    for (let elements of Object.entries(book)) {
        let currentWinInSystem = Object.entries(elements[1]).sort((a, b) => b[1] - a[1])[0];
        let totalSum = 0;
        Object.entries(elements[1]).map(a => totalSum += a[1]);
        if (!winners.hasOwnProperty(currentWinInSystem[0])){
            winners[currentWinInSystem[0]] = {
                'hisVotes' : 0,
                'winnerInSystem' : {}
            };
        }
        winners[currentWinInSystem[0]]['winnerInSystem'][elements[0]] = totalSum;
        winners[currentWinInSystem[0]]['hisVotes'] += totalSum;
        allVotes += totalSum;
    }
    let sortedWinners = Object.entries(winners).sort((a, b) => b[1]['hisVotes'] - a[1]['hisVotes']);
    if (sortedWinners[0][1]['hisVotes'] === allVotes){
        console.log(`${sortedWinners[0][0]} wins with ${allVotes} votes`);
        console.log(`${sortedWinners[0][0]} wins unopposed!`);
    } else if (sortedWinners[0][1]['hisVotes'] > allVotes / 2){
        console.log(`${sortedWinners[0][0]} wins with ${sortedWinners[0][1]['hisVotes']} votes`);
        console.log(`Runner up: ${sortedWinners[1][0]}`);
        for (let element of Object.entries(sortedWinners[1][1]['winnerInSystem']).sort((a, b) => b[1] - a[1])) {
            console.log(`${element[0]}: ${element[1]}`);
        }
    } else {
        console.log(`Runoff between ${sortedWinners[0][0]} with ${Math.floor((sortedWinners[0][1]['hisVotes'] / allVotes) * 100)}% and ${sortedWinners[1][0]} with ${Math.floor((sortedWinners[1][1]['hisVotes'] / allVotes) * 100)}%`);
    }
}

solve([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]
);