function galacticElections(arr) {
    let book = new Map();

    for (let currentObj of arr) {
        let system = currentObj.system;
        let candidate = currentObj.candidate;
        let votes = Number(currentObj.votes);

        if (!book.has(system)) {
            book.set(system, new Map());
        }
        if (!book.get(system).has(candidate)) {
            book.get(system).set(candidate, 0);
        }
        book.get(system).set(candidate, book.get(system).get(candidate) + votes);
    }
    var resultVotes = new Map();

    let allVotes = 0;
    for (let element of [...book]) {
        let name = element[0];

        let winnerSyster = "";
        let systemVotes = 0;
        for (let candidat of [...element[1]].sort((a, b) => b[1] - a[1])) {
            let currentCandidat = candidat[0];
            winnerSyster = currentCandidat;
            break;
        }
        for (let candidat of [...element[1]]) {
            let votes = candidat[1];
            systemVotes += votes;
        }
        resultVotes.set(name, [winnerSyster, systemVotes]);
        allVotes += systemVotes;
    }
    let value = [...resultVotes].sort((a, b) => b[1][1] - a[1][1]);

    let resultSysmes = new Map();
    let resultValues = new Map();
    for (let m of value) {
        let system = m[0];
        let candidate = m[1][0];
        let votes = m[1][1];
        if (!resultSysmes.has(candidate)) {
            resultSysmes.set(candidate, new Map());
        }
        resultSysmes.get(candidate).set(system, votes);
        if (!resultValues.has(candidate)) {
            resultValues.set(candidate, 0);
        }
        resultValues.set(candidate, resultValues.get(candidate) + votes);
    }
    let sums = [...resultValues];

    if (resultValues.size == 1) {
        let currentMax = [...resultValues];
        console.log(`${currentMax[0][0]} wins with ${currentMax[0][1]} votes`);
        console.log(`${currentMax[0][0]} wins unopposed!`);
    } else if (sums[0][1] > allVotes / 2) {
        console.log(`${sums[0][0]} wins with ${sums[0][1]} votes`);
        console.log(`Runner up: ${sums[1][0]}`);
        for (let w of resultSysmes.get(sums[1][0])) {
            console.log(`${w[0]}: ${w[1]}`);
        }
    } else {
        let currentMax = [...resultValues];
        console.log(`Runoff between ${currentMax[0][0]} with ${Math.floor((currentMax[0][1] / allVotes) * 100)}% and ${currentMax[1][0]} with ${Math.floor((currentMax[1][1] / allVotes) * 100)}%`);
    }
}
galacticElections([{ system: 'Theta', candidate: 'Kitler', votes: 50 },
{ system: 'Theta', candidate: 'Space Cow', votes: 45 },
{ system: 'Theta', candidate: 'Huge Manatee', votes: 45 },
{ system: 'Theta', candidate: 'Flying Shrimp', votes: 45 },
{ system: 'Tau', candidate: 'Kitler', votes: 50 },
{ system: 'Tau', candidate: 'Space Cow', votes: 60 },
{ system: 'Sigma', candidate: 'Kitler', votes: 50 },
{ system: 'Sigma', candidate: 'Huge Manatee', votes: 60 },
{ system: 'Omicron', candidate: 'Kitler', votes: 50 }]
);