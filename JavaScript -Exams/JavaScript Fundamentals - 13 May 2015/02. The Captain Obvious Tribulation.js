function solve(arr) {
    let text1 = arr[0].toLowerCase();
    let text2 = arr[1].toLowerCase();

    let book = new Map();
    let regex = new RegExp("[a-z]+", "g");
    let findingWords = regex.exec(text1);
    while(findingWords != null){
        if (!book.has(findingWords[0])){
            book.set(findingWords[0], 0);
        }
        book.set(findingWords[0], book.get(findingWords[0]) + 1);
        findingWords = regex.exec(text1);
    }
    let totalWords = [...book].filter((a) => a[1] >= 3).sort((a, b) => b[1] - a[1]);
    if (totalWords.length == 0){
        console.log(`No words`);
        return;
    }

    let printResult = 0;
    let text2Tokens = text2.split(/[\.\!\?]/g).filter(a => a != "").map(a => a.trim());
    let text2TokensSensitive = arr[1].match(/(?:.*?)(?:\.|\!|\?)/g).map(a => a.trim());
    let sen = 0;
    for (let sentence of text2Tokens) {
        let count = 0;
        let wordInSentance = sentence.split(" ").filter(a => a != "");
        for (let word of Array.from(totalWords)) {
            if (wordInSentance.some(a => a == word[0])){
                count++;
            }
            if (count == 2){
                console.log(text2TokensSensitive[sen]);
                printResult++;
                break;
            }
        }
        sen++;
    }
    if (printResult == 0){
        console.log(`No sentences`);
    }
}
solve(["Using motion triggered cameras located in the Yanachaga National Park in Peru, scientists found significant changes in animal behavior more than three weeks before a magnitude 7 earthquake struck the region in 2011. On a typical day the cameras recorded 5 to 15 animal sightings, but within the 23 day period in the run up to the earthquake, they recorded five or fewer sightings. For the five to seven days immediately before the earthquake, no animal movements were recorded at all an unusual phenomenon in a mountainous rainforest region normally teeming with wildlife.",
"While science stops short of calling it a sixth sense, wild animals are generally more sensitive than people when it comes to responding to their environment. Humans are generalists, we are not specialized ecologically, she said. We don't live in contact with the soil or the ground. We've insulated ourselves into concrete buildings in cities. While there have been reports of people displaying medical symptoms ahead of earthquakes, I think the effect would be negligible. However, I'm prepared to keep an open mind on that subject."]);