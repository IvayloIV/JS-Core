function solve(arr) {
    arr = arr.filter(a => a !== '');
    let pattern = new RegExp('(.*?)=(.*)', 'g');
    for (let element of arr) {
        let tokens = element
            .replace(/%20|\+/g, ' ')
            .replace(/\s+/g, ' ')
            .split(/&|\?/);
        let book = {};
        for (let token of tokens) {
            let matchText = pattern.exec(token);
            while (matchText){
                let key = matchText[1].trim();
                let value = matchText[2].trim();
                if (!book.hasOwnProperty(key)){
                    book[key] = [];
                }
                book[key].push(value);
                matchText = pattern.exec(token);
            }
        }
        let result = '';
        for (let entry of Object.entries(book)) {
            result += `${entry[0]}=[${entry[1].join(', ')}]`;
        }
        console.log(result);
    }
}