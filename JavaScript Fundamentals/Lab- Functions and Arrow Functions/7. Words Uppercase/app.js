function wolrdsUppercase(alb) {
    let extractWords = p => p.split(/\W+/);

    let p = alb.toUpperCase();
    let words = extractWords(p);
    words = words.filter(a => a != '');
    return words.join(', ');
}
console.log(wolrdsUppercase('Hi, how are you?'));