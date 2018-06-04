function solve(arr) {
    arr = arr.filter(a => a !== '');
    let text1 = arr[0].toLowerCase();
    let text2 = arr[1];
    let allWords = text1.split(/[^a-z]+/).filter(a => a !== '');
    let book = {};
    for (let word of allWords) {
        if (!book.hasOwnProperty(word)){
            book[word] = 0;
        }
        book[word]++;
    }
    let validWords = Object.keys(book).filter(a => book[a] >= 3);
    if (validWords.length === 0){
        return 'No words';
    }
    let patter = /(.*?)[.!?]/gi;
    let match = patter.exec(text2);
    let result = [];
    while (match){
        let allSentence = match[0].trim();
        let innerSentence = match[1].trim();
        let count = 0;
        for (let currentWord of validWords) {
            let innerPattern = new RegExp(`\\b${currentWord}\\b`);
            if (innerPattern.test(innerSentence.toLowerCase())){
                count++;
            }
            if (count === 2) {
                break;
            }
        }
        if (count >= 2){
            result.push(allSentence);
        }
        match = patter.exec(text2);
    }
    if (result.length === 0) {
        return `No sentences`;
    } else {
        return result.join('\n')
    }
}
solve(["Using motion triggered cameras located in the Yanachaga National Park in Peru, scientists found significant changes in animal behavior more than three weeks before a magnitude 7 earthquake struck the region in 2011. On a typical day the cameras recorded 5 to 15 animal sightings, but within the 23 day period in the run up to the earthquake, they recorded five or fewer sightings. For the five to seven days immediately before the earthquake, no animal movements were recorded at all an unusual phenomenon in a mountainous rainforest region normally teeming with wildlife.",
"While science stops short of calling it a sixth sense, wild animals are generally more sensitive than people when it comes to responding to their environment. Humans are generalists, we are not specialized ecologically, she said. We don't live in contact with the soil or the ground. We've insulated ourselves into concrete buildings in cities. While there have been reports of people displaying medical symptoms ahead of earthquakes, I think the effect would be negligible. However, I'm prepared to keep an open mind on that subject."]);