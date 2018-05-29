function solve(text) {
    let allWords = text.match(/\w+/g);
    console.log(allWords.join('|'));
}
solve('A Regular Expression needs to have the global flag in order to match all occurrences in the text');