function spyMaster(arr) {
    let key = arr.shift();

    for (let currentText of arr) {
        let regexMessage = new RegExp(`((?:(?:\\s)|^)${key}(?:\\s+))([\#\%\$\!\A-Z]{8,})((?:\\s)|\\.|\\,|$)`, 'gi');
        let totalText = currentText.replace(regexMessage, (allMatch, g1, g2, g3) => g1 + changeText(g2) + g3);
        console.log(totalText);
    }

    function changeText(g2) {
        let t = /^[\\#\\%\\$\\!A-Z]{8,}$/.exec(g2);
        if (t == null) {
            return g2;
        }
        let m = g2.replace(/\!/g, 1)
            .replace(/\%/g, 2)
            .replace(/\#/g, 3)
            .replace(/\$/g, 4)
            .replace(/[A-Z]/g, (allMatch) => allMatch.toLowerCase());
        return m;
    }
}
spyMaster([`multiSpace`,
`multiSpace  isFAILLLLLL, but this multiSpace  ISN!O%T#$#FA$IL`,
`and this one too multiSpace    !!##$$%%$$##!!, multiSpace    JJJSF%%#!`,
`and a wrong one now multiSpace    HUE_HUE_HUE`]);