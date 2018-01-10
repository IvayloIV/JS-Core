function chessBoard(n) {
    let text = "<div class=\"chessboard\">\n";
    for (var row = 0; row < n; row++) {
        text += "<div>\n";
        for (var cow = 0; cow < n; cow++) {
            let color = (row + cow) % 2 == 0 ? "black" : "white";
            text += `<span class="${color}"></span>\n`;
        }
        text += "</div>\n";
    }
    text += "</div>";
    return text;
}