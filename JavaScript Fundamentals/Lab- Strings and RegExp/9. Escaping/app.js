function escaping(arr) {
    let text = "<ul>\n"
    for (let a of arr) {
        text += "<li>"
        text += a
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
        text += "</li>\n"
    }
    text += "</ul>"
    return text;
}
console.log(escaping(['<b>unescaped text</b>', 'normal text']));