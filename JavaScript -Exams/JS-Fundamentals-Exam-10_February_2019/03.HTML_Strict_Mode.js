function solve(arr) {
    const pattern = '<((?:.*?)\\w(?:.*?))>(.*)<\/((?:.*?)\\w(?:.*?))>';
    const sentencePattern = new RegExp(pattern)
    const fullSentencePattern = new RegExp(`^${pattern}$`)
    const textArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let currentSentence = arr[i];

        if (!fullSentencePattern.test(currentSentence)) {
            continue;
        }

        let exec;
        while ((exec = sentencePattern.exec(currentSentence)) !== null) {
            if (exec[1] !== exec[3]) {
                break;
            }

            currentSentence = currentSentence.replace(sentencePattern, (fullMatch, g1, g2) => {
                return g2;
            });
        }

        if (!/<(.*?)\w(.*?)>/.test(currentSentence) && !/<\/(.*?)\w(.*?)>/.test(currentSentence)) {
            textArr.push(currentSentence);
        }
    }

    console.log(textArr.join(' '));
}

solve(['<h1><span>Hello World!</span></h1>',
'<p>I am Peter.']);