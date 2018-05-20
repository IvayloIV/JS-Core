function countWordsMap(arr) {
    let book = new Map();
    let text = arr.join(' ');

    let regex = new RegExp("\\w+", "gi");

    let findingWords = regex.exec(text);
    while (findingWords != null) {
        let word = findingWords[0].toLowerCase();
        if (!book.has(word)) {
            book.set(word, 0);
        }
        book.set(word, book.get(word) + 1)
        findingWords = regex.exec(text);
    }
    let sortedArr = Array.from(book.keys()).sort();
    sortedArr.forEach(a => console.log(`'${a}' -> ${book.get(a)} times`));
}
countWordsMap([`JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --`]);