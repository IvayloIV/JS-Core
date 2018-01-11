function multiTable(n) {
    let text = "<table border=\"1\">\n";
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            text += "<tr><th>x</th>";
        }
        else {
            text += `<th>${i}</th>`
        }
    }
    text += "</tr>";
    for (let i = 1; i <= n; i++) {
        for (var k = 0; k <= n; k++) {
            if (k == 0) {
                text += `<tr><th>${i}</th>`;
            }
            else {
                text += `<td>${i * k}</td>`;
            }
        }
        text += `</tr>\n`;
    }

    text += "</table>";
    return text;
}
