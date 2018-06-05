function solve(arr) {
    let text = arr.join(' ');
    let tokens = text.split(' ').map(Number);
    for (let i = 0; i < tokens.length - 4; i++) {
        if (tokens[i] === 32656 && tokens[i + 1] === 19759 && tokens[i + 2] === 32763 && tokens[i + 3] === 0) {
            let count = tokens[i + 4];
            let result = '';
            for (let j = i + 6; j < Math.min(tokens.length, i + count + 6); j++) {
                result += String.fromCharCode(tokens[j]);
            }
            if (result !== '') {
                console.log(result);
            }
        }
    }
}

solve([`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0`,
`5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0`,
`75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101`,
`114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0`]);