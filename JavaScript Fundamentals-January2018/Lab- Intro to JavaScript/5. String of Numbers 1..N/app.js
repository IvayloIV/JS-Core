function stringOfNums(n) {
    let k = Number(n);
    let text = "";
    for (var i = 1; i <= n; i++) {
        text += i;
    }
    console.log(text);
}
stringOfNums('11');