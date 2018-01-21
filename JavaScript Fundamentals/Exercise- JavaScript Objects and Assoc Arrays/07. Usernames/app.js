function userNames(words) {
    let book = new Set();

    for (let word of words) {
        book.add(word);
    }

    let arrWords = [...book].sort(sortWords);
    console.log(arrWords.join('\n'));

    function sortWords(a, b) {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}
userNames([`Ashton`,
    `Kutcher`,
    `Ariel`,
    `Lilly`,
    `Keyden`,
    `Aizen`,
    `Billy`,
`Braston`]);