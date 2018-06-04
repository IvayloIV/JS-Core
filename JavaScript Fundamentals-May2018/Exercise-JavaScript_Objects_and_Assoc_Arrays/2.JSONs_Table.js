function solve(arr) {
    let result = `<table>\n`;
    for (let element of arr) {
        element = JSON.parse(element);
        result += `	<tr>\n		<td>${escapeHTML(element.name)}</td>\n		<td>${escapeHTML(element.position)}</td>\n`;
        result += `		<td>${escapeHTML(element.salary)}</td>\n	<tr>\n`;
    }

    console.log(result += `</table>`);

    function escapeHTML(text) {
        let currentText = text.toString();
        return currentText.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}
solve([`{"name":"Pesho","position":"Promenliva","salary":100000}`,
`{"name":"Teo","position":"Lecturer","salary":1000}`,
`{"name":"Georgi","position":"Lecturer","salary":1000}`]);