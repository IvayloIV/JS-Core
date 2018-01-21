function jsonToHtml(arr) {
    let curretArr = JSON.parse(arr);
    let html = "<table>\n";

    html += "  <tr>";
    for (let e of Object.keys(curretArr[0])) {
        html += `<th>${escapeHTML(e)}</th>`;
    }
    html += "</tr>\n";

    for (let currentObj of curretArr) {
        html += `  <tr>`;
        for (let a of Object.keys(currentObj)) {
            html += `<td>${escapeHTML(currentObj[a])}</td>`;
        }
        html += `</tr>\n`;
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
jsonToHtml(`[{ "Name": "Pesho <div>-a", "Age": 20, "City": "Sofia" }, { "Name": "Gosho", "Age": 18, "City": "Plovdiv" }, { "Name": "Angel", "Age": 18, "City": "Veliko Tarnovo" }]`);