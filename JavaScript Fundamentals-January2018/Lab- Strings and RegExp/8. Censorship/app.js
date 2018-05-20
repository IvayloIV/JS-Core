function censor(text, replaceArr) {
    for (let currentR of replaceArr) {
        let index = text.indexOf(currentR);
        while (index != -1) {
            text = text.replace(currentR, "-".repeat(currentR.length));
            index = text.indexOf(currentR);
        }
    }
    console.log(text);
}

function censorRegex(text, replaceArr) {
    for (let currentR of replaceArr) {
        let regex = new RegExp(`${currentR}`, "g");
        text = text.replace(regex, "-".repeat(currentR.length));
    }
    console.log(text);
}

censorRegex('roses are red, violets are  redblue', [', violets are', 'red']);
