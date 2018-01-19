function countArr(str, text) {
    let seartchIndex = text.indexOf(str, 0);

    let count = 0;
    while (seartchIndex != -1) {
        count++;
        seartchIndex = text.indexOf(str, seartchIndex + 1);
    }
    console.log(count);
}

countArr('haha', 'hahaha');