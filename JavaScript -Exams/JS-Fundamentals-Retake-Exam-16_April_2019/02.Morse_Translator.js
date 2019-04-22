function solve(code) {
    const morseCodes = [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-',
        '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    const words = code.split(' ');
    const translatedWords = [];

    for(let word of words) {
        let index = morseCodes.indexOf(word);
        translatedWords.push(String.fromCharCode(97 + index));
    }

    console.log(translatedWords.join(''));
}

solve('--. --- --- --. .-.. .');