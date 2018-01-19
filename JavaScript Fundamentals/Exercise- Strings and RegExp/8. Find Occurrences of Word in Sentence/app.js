function findWords(text, word) {
    let regex = new RegExp(`\\b${word}\\b`, "gi");
    let findings = text.match(regex);
    findings === null ? console.log("0") : console.log(findings.length);
}
findWords('There was one. Therefore I bought it. I wouldn`t buy it otherwise.', "ther465e");