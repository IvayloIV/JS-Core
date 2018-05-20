function solve(text) {
    let searchForSvg = /<svg>(.*?)<\/svg>/.exec(text);
    if (searchForSvg === null) {
        console.log(`No survey found`);
        return;
    }
    let labelMatch = /<svg>(?:.*?)<cat>(?:.*?)<text>(?:.*?)\[(.*?)](?:.*?)<\/text>(?:.*?)<\/cat>(?:.*?)<cat>(?:.*?)<\/cat>(?:.*?)<\/svg>/.exec(text);

    if (labelMatch === null) {
        console.log(`Invalid format`);
        return;
    }

    let sum = 0;
    let value = 0;
    let pattern = new RegExp('<g><val>([-]?[0-9]+)<\\/val>([-]?[0-9]+)<\\/g>', 'g');
    let matchNumbers = pattern.exec(text);
    while (matchNumbers !== null){
        let ratingValue = Number(matchNumbers[1]);
        let voteCount = Number(matchNumbers[2]);

        if (ratingValue < 1 || ratingValue > 10 || voteCount < 0) {
            matchNumbers = pattern.exec(text);
            continue;
        }
        sum += ratingValue * voteCount;
        value += voteCount;
        matchNumbers = pattern.exec(text);
    }

    if (value === 0){
        console.log(`${labelMatch[1]}: 0`);
    } else {
        let average = sum / value;
        console.log(`${labelMatch[1]}: ${Number(average.toFixed(2))}`);
    }
}
solve(`<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>`);