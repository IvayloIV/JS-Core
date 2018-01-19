function printLetters(str) {
    for (let l in str) {
        console.log(`str[${l}] -> ${str[l]}`);
    }
}
printLetters('SoftUni');
