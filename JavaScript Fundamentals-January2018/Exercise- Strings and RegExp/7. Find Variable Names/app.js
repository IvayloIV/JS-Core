function findVariableNames(text) {
    let regex = /\_([A-Za-z0-9]+)/g;
    let output = regex.exec(text);
    let allMatches = [];
    while (output != null) {
        allMatches.push(output[1]);
        output = regex.exec(text);
    }
    console.log(allMatches.join(','));
}
findVariableNames('Calculate the _area of the _perfectRectangle object.');