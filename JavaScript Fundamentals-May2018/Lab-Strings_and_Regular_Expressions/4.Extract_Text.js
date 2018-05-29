function solve(text) {
    let result = [];
    let firstBracket = text.indexOf('(');
    let secondBracket = text.indexOf(')', firstBracket);
    while (firstBracket !== -1 && secondBracket !== -1){
        result.push(text.substring(firstBracket + 1, secondBracket));
        firstBracket = text.indexOf('(', secondBracket);
        secondBracket = text.indexOf(')', firstBracket);
    }
    console.log(result.join(', '));
}
solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');