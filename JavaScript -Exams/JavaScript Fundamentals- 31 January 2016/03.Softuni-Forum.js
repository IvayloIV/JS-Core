function solve(arr) {
    let bannedWords = arr.pop().split(' ');
    let allText = arr.join('\n');
    let pattern = /<code>[\s\S]+?<\/code>/g;
    let findingCode = pattern.exec(allText);
    let replacers = {};
    while (findingCode !== null){
        replacers['!'.repeat(findingCode[0].length)] = findingCode[0];
        allText = allText.replace(findingCode[0], '!'.repeat(findingCode[0].length));
        findingCode = pattern.exec(allText);
    }

    bannedWords.forEach(e => {
        let bannedWordsPattern = new RegExp(`#${e}\\b`, 'g');
        allText = allText.replace(bannedWordsPattern, '*'.repeat(e.length))
    });
    let patternWords = /#([A-Za-z][A-Za-z0-9_-]+[A-Za-z0-9])\b/g;
    let matches = patternWords.exec(allText);
    while(matches !== null) {
        allText = allText.replace(matches[0], `<a href="/users/profile/show/${matches[1]}">${matches[1]}</a>`);
        matches = patternWords.exec(allText);
    }
    Object.keys(replacers).forEach((e) => {
        allText = allText.replace(e, replacers[e]);
    });
    console.log(allText);
}
solve([`#RoYaL: I'm not sure what you mean,`,
`but I am confident that I've written`,
`everything correctly. Ask #iordan_93`,
`and #pesho if you don't believe me`,
`<code>`,
`#trying to print stuff`,
`print("yoo")`,
`</code>`,
`pesho gosho`]);