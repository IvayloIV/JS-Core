function solve(arr) {
    let words = new Set();
    let text = arr.join(' ');
    let allWords = text.toLowerCase().split(/\W+/).filter(a => a !== '');
    for (let currentWord of allWords) {
        words.add(currentWord);
    }
    console.log([...words].join(', '));
}
solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ']);