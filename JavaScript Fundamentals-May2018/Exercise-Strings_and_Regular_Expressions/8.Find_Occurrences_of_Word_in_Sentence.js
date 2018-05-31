function solve(text, word) {
    let pattern = new RegExp(`\\b${word}\\b`, 'gi');
    let matches = text.match(pattern);
    console.log(matches === null ? 0 : matches.length);
}
solve('The waterfall was so high, that the child couldn’t see its peak.', 'the');