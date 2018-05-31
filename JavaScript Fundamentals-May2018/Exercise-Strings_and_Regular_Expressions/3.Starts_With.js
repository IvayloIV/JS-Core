let solve = (mainStr, str) => mainStr.startsWith(str);

function solve2(mainStr, str) {
    let result = mainStr.substr(0, str.length);
    return result === str;
}

console.log(solve2('How have you been?', 'how'));