function capitalizaTheWords(text) {
    let arrText = text.split(" ");
    for (let i in arrText) {
        arrText[i] = arrText[i][0].toUpperCase() + arrText[i].substring(1).toLowerCase();
    }
    console.log(arrText.join(' '));
}
capitalizaTheWords('Was that Easy? tRY thIs onE for SiZe!');