function uniqueSequensec(arr) {
    let book = new Map();

    for (let p of arr) {
        let currentElement = JSON.parse(p).map(Number);
        let sortedElements = currentElement.sort((a, b) => b - a);
        let sum = sortedElements.reduce((a, b) => a + b);
        if (!book.has(sum)) {
            book.set(sum, sortedElements);
        }
    }
    let sortedBook = [...book].sort(sortBook);
    for (let [key, value] of sortedBook) {
        console.log(`[${value.join(', ')}]`);
    }

    function sortBook(a, b) {
        if (a[1].length < b[1].length) {
            return -1;
        } else if (a[1].length > b[1].length) {
            return 1;
        }
        return 0;
    }
}
uniqueSequensec([`[-3, -2, -1, 0, 1, 2, 3, 4]`,
   `[10, 1, -17, 0, 2, 13]`,
`[4, -3, 3, -2, 2, -1, 1, 0]`]);