function solve(arr) {
    let words = arr.join(' ').toLowerCase().split(/\W+/).filter(a => a !== '');
    let book = new Map();
    for (let word of words) {
        if (!book.has(word)){
            book.set(word , 0);
        }
        book.set(word, book.get(word) + 1);
    }

    for (let element of [...book].sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`'${element[0]}' -> ${element[1]} times`);
    }
}
solve([`Far too slow, you're far too slow.`]);