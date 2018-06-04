function solve(arr) {
    let book = new Set();
    for (let element of arr) {
        book.add(element);
    }
    for (let word of [...book].sort(sortWords)) {
        console.log(word);
    }

    function sortWords(a, b) {
        if (a.length !== b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }
}
solve([`Ashton`,
`Kutcher`,
`Ariel`,
`Lilly`,
`Keyden`,
`Aizen`,
`Billy`,
`Braston`]);