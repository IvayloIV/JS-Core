function solve(textTokens) {
    textTokens = textTokens[0].split(/\s+/).filter(a => a !== '').map(a => a.split(''));
    let result = '';
    while (true){
        if (textTokens.every(a => a.length === 0)){
            break;
        }
        for (let i = 0; i < textTokens.length; i++) {
            if (textTokens[i].length !== 0){
                result += textTokens[i].pop();
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        let helper = result.split('');
        let currentChar = result[i];
        let steps = currentChar.toLowerCase().charCodeAt(0) - 96;
        helper.splice(i, 1);
        let indexOfAddElement = (i + steps) % (helper.length + 1);
        helper.splice(indexOfAddElement, 0, currentChar);
        result = helper.join('');
    }
    console.log(result);
}
solve([`Hi exam`]);