function solve(arr) {
    let book = new Map();
    var bookSubs = new Map();

    for (let currentProduct of arr) {
        let productTokens = currentProduct.split("-");

        if (productTokens.length == 1){
            let sub = productTokens[0];
            if (!book.has(sub)){
                book.set(sub, []);
                bookSubs.set(sub, 0);
            }
        }else{
            let newSub = productTokens[0];
            let currendSub = productTokens[1];
            if (newSub == currendSub){
                continue;
            }
            if (!book.has(newSub) || !book.has(currendSub)){
                continue;
            }
            if (book.get(currendSub).every(a => a != newSub)){
                book.get(currendSub).push(newSub);
                bookSubs.set(newSub, bookSubs.get(newSub) + 1);
            }
        }
    }
    book = [...book].sort(sortBook);
    console.log(book[0][0]);
    let count = 1;
    for (let subs of book[0][1]) {
        console.log(`${count}. ${subs}`);
        count++;
    }

    function sortBook(a, b){
        if (a[1].length == 0 && b[1].length == 0){
            return 0;
        }

        if (a[1].length < b[1].length){
            return 1;
        } else if (a[1].length > b[1].length){
            return -1;
        } else{
            let substract = bookSubs.get(b[0]) - bookSubs.get(a[0]);
            return substract
        }
    }
}
solve([`Z`,
    `O`,
    `R`,
    `D`,
    `Z-O`,
    `R-O`,
    `D-O`,
    `P`,
    `O-P`,
    `O-Z`,
    `R-Z`,
    `D-Z`]);