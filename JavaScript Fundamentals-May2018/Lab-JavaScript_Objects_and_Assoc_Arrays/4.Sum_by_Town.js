function solve(arr) {
    let book = {};
    for (let i = 0; i < arr.length; i+= 2) {
        let [town, income] = [arr[i], arr[i + 1]];
        if (!book.hasOwnProperty(town)){
            book[town] = 0;
        }
        book[town] += Number(income);
    }
    console.log(JSON.stringify(book));
}

solve([`Sofia`,
`20`,
`Varna`,
`3`,
`Sofia`,
`5`,
`Varna`,
`4`]);