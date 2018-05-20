function scoreHTML(str) {
    let obj = JSON.parse(str);
    let html = "<table>\n";
    html += "<tr><th>name</th><th>score</th></tr>\n";
    for (let currentObj of obj) {
        let name = currentObj['name'];
        let score = currentObj['score'];
        let realName = encodName(name);
        html += `  <tr><td>${realName}</td><td>${score}</td></tr>\n`;
    }
    html += `</table>`;
    console.log(html);

    function encodName(name) {
        return name.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}
scoreHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');