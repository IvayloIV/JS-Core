function solve(arr) {
    arr = JSON.parse(arr);
    let table = `<table>\n  <tr><th>name</th><th>score</th></tr>\n`;
    for (let elements of arr) {
        table += `  <tr><td>${htmlEscape(elements.name)}</td><td>${elements.score}</td></tr>\n`;
    }
    console.log(table += `</table>`);

    function htmlEscape(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
    }
}
solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');