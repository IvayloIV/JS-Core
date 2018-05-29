function solve(text, words) {
    words.forEach(word => {
        while (text.indexOf(word) !== -1) {
            text = text.replace(word, '-'.repeat(word.length));
        }
    });
    console.log(text);
}
solve('roses are red, violets are blue', [', violets are', 'red']);