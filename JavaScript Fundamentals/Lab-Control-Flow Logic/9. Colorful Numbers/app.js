function colorFullNums(n) {
    let text = "<ul>\n";
    for (var i = 1; i <= Number(n); i++) {
        if (i % 2 == 1) {
            text += `<li><span style="color:green">${i}</span></li>\n`;
        }
        else {
            text += `<li><span style="color:blue">${i}</span></li>\n`;
        }
    }
    text += "</ul>";
    return text;
}
