function countWords(arr) {
    let book = {};
    let text = arr.join(' ');

    let regex = new RegExp("\\w+", "g");

    let findingWords = regex.exec(text);
    while (findingWords != null) {
        let word = findingWords[0];
        if (!book.hasOwnProperty(word)) {
            book[word] = 0;
        }
        book[word]++;
        findingWords = regex.exec(text);
    }
    console.log(JSON.stringify(book));
}
countWords([`JS devs use Node.js`, `for server-side JS.--`, `JS for devs`]);