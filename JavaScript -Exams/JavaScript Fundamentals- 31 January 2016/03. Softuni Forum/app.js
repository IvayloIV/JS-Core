//70 <code></code
function forum(arr) {
    let bannedPeople = arr.pop().split(" ");

    let text = "";
    for (let n of arr) {             
        text += n + "!23NewL!"
    }
    text = text.replace(/(.*?)<code>(.*?)<\/code>(.*)/g, (allMatch, g1, g2, g3) => replaceCode(allMatch, g1, g2, g3, bannedPeople));
    console.log(text.split("!23NewL!").join('\n'));

    function replaceCode(allMatch, g1, g2, g3, bannedPeople) {
        g1 = bannPeople(bannedPeople, g1);
        g1 = linkPeople(g1);
        g3 = bannPeople(bannedPeople, g3);
        g3 = linkPeople(g3);
        return `${g1}<code>${g2}</code>${g3}`;
    }

    function linkPeople(text) {
        let pattern = /#([A-Za-z][A-Za-z0-9_-]+[A-Za-z0-9])\b/g;
        let findingP = pattern.exec(text);
        while (findingP != null) {
            text = text.replace(pattern, (allMatch, g1) => `<a href="/users/profile/show/${g1}">${g1}</a>`);
            findingP = pattern.exec(text);
        }
        return text;
    }

    function bannPeople(bannedPeople, text) {
        for (let p of bannedPeople) {
            let pattern = new RegExp(`#${p}`, "g");
            text = text.replace(pattern, "*".repeat(p.length));
        }
        return text;
    }
}

function solve(arr) {
    var banList = arr.pop().split(' ');
    var text = arr.join('\n');

    var codePattern = /<code>[\s\S]+?<\/code>/g;
    var codeBlocks = [];
    var matchingCode;
    while (matchingCode = codePattern.exec(text)) {
        var codeBlock = matchingCode[0];
        var codeReplacer = new Array(codeBlock.length).join('#');
        text = text.replace(codeBlock, codeReplacer);
        codeBlocks.push({
            original: codeBlock,
            replacedWith: codeReplacer
        });
    }

    banList.forEach(function (entry) {
        var censoredUserPattern = new RegExp('(#\\b' + entry + ')\\b', 'g');
        var match;
        while (match = censoredUserPattern.exec(text)) {
            var censoredName = match[1];
            var replacer = new Array(censoredName.length).join('*');
            text = text.replace(censoredName, replacer);
        }
    });

    var validUserPattern = /#(\b[a-zA-Z][\w\-]+[a-zA-Z0-9]\b)/g;
    var linkOpeningTag = '<a href="/users/profile/show/';
    var linkClosingTag = '</a>';
    text = text.replace(validUserPattern, linkOpeningTag + '$1">$1' + linkClosingTag);

    codeBlocks.forEach(function (codeBlock) {
        text = text.replace(codeBlock.replacedWith, codeBlock.original);
    });

    console.log(text);
}

solve([
`it is an almost unorthographic life One day however a small line of blind`,
            `text by the name <code> of Lorem Ipsum #decided to </code>`,
`leave for the far World of Grammar.`,
                `The Big #Oxmox advised her`,
`not to do so, because there were thousands of bad Commas,`,
                    `wild Question Marks and devious Semikoli,`,
`but the Little Blind Text didn't listen.`,
`small river Vokalia`]);