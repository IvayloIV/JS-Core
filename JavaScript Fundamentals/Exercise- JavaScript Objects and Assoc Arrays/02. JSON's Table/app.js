function jsonTable(arr) {
    let html = "<table>\n";

    for (let e of arr) {
        var obj = JSON.parse(e);
        html += "       <tr>\n";
        for (let currentE of Object.keys(obj)) {
            html += `           <td>${escapeHTML(obj[currentE])}</td>\n`;
        }
        html += "       <tr>\n";
    }
    html += "</table>";
    console.log(html);

    function escapeHTML(text) {
        let currentText = text.toString();
        return currentText.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}
jsonTable([`{"name":"Pesho","position":"Promenliva","salary":100000}`,
    `{"name":"Teo","position":"Lecturer","salary":1000}`,
`{"name":"Georgi","position":"Lecturer","salary":1000}`]);