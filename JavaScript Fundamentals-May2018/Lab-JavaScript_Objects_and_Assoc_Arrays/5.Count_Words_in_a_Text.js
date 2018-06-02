function solve(arr) {
    let text = arr.join(' ');
    let words = text.split(/\W+/).filter(a => a !== '');
    let book = {};
    for (let word of words) {
        if (!book.hasOwnProperty(word)){
            book[word] = 0;
        }
        book[word]++;
    }
    console.log(JSON.stringify(book));
}
solve([`Far too slow, you're far too slow.`]);