function solve(text, symbol) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === symbol) {
            count++;
        }
    }
    console.log(count);
}
solve('hello', 'l');