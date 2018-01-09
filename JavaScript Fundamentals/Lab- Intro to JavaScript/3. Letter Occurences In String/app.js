function letterString(text, letter) {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] == letter) {
            count++;
        }
    }
    return count;
}

console.log(letterString('hello', 'l'));
