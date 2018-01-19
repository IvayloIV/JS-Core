function lost(key, text) {
    text = text.replace(/\n/g, "newLine");

    let regexMessage = new RegExp(`${key}(.*)${key}`);
    let findingMessage = regexMessage.exec(text);
    let east = findingEastNorth(text, 'east');
    let north = findingEastNorth(text, 'north');

    console.log(`${north} N`);
    console.log(`${east} E`);
    console.log(`Message: ${findingMessage[1].replace(/newLine/g, '\n')}`);

    function findingEastNorth(text, str) {
        let regex = new RegExp(`(east|north)(?:.*?)([0-9]{2})(?:.*?)\,(?:.*?)([0-9]{6})`, 'gi');
        let lastMatch = '';
        let finding = regex.exec(text);

        while (finding != null) {
            if (finding[1].toLowerCase() == str.toLowerCase()) {
                lastMatch = finding[2] + '.' + finding[3];
            }
            finding = regex.exec(text);
        }
        return lastMatch;
    }
}
lost(`4ds`, `eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532`);