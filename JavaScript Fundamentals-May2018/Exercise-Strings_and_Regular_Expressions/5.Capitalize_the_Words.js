function solve(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i].substring(1).toLowerCase();
        words[i] = words[i][0].toUpperCase() + word;
    }
    console.log(words.join(' '));
}
solve('Was that Easy? tRY thIs onE for SiZe!');