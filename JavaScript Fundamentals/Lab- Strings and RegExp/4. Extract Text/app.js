function extractText(text) {
    let output = [];
    let startSeartch = text.indexOf("(", 0);

    while (startSeartch > -1) {
        let endIndex = text.indexOf(")", startSeartch + 1);
        if (endIndex == -1) {
            break;
        }
        output.push(text.substring(startSeartch + 1, endIndex));
        startSeartch = text.indexOf("(", endIndex + 1);
    }
   return output.join(', ');
}

function extractTextRegex(text) {
    let regex = /\((.*?)\)/g;
    let output = regex.exec(text);

    let totalOutput = [];
    while (output != null) {
        totalOutput.push(output[1]);
        output = regex.exec(text);
    }
    return totalOutput.join(', ');
}
console.log(extractTextRegex('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));