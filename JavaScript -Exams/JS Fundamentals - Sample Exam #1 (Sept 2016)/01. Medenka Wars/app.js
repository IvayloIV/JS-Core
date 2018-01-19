function medenkaWar(arr) {
    let damageViktorWhite = 0;
    let damageNaskoBlack = 0;


    let countWhite = 0;
    let numWhite = -1;
    let colorBlack = 0;
    let numBlack = -1;
    for (let current of arr) {
        let splitCurrent = current.split(' ');
        let numMedneka = Number(splitCurrent[0]);
        let color = splitCurrent[1];

        if (color == "white") {
            if (numWhite != numMedneka) {
                countWhite = 1;
                numWhite = numMedneka;
            } else {
                countWhite++;
            }
            if (countWhite == 2) {
                numMedneka *= 2.75;
                countWhite = 0;
            }
            damageViktorWhite += (numMedneka * 60);
        } else if (color == "dark"){
            if (numBlack != numMedneka) {
                colorBlack = 1;
                numBlack = numMedneka;
            } else {
                colorBlack++;
            }
            if (colorBlack == 5) {
                numMedneka *= 4.5;
                colorBlack = 0;
            }
            damageNaskoBlack += (numMedneka * 60);
        }
    }

    if (damageViktorWhite >= damageNaskoBlack) {
        console.log(`Winner - Vitkor`);
        console.log(`Damage - ${damageViktorWhite}`);
    } else if (damageViktorWhite < damageNaskoBlack){
        console.log(`Winner - Naskor`);
        console.log(`Damage - ${damageNaskoBlack}`);
    }
}
medenkaWar(['2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
]);