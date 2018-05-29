function solve(arr) {
    let result = `<ul>\n`;
    for (let arrElement of arr) {
        result += `  <li>${htmlEscape(arrElement)}</li>\n`;
    }

    return result += `</ul>`;
    
    function htmlEscape(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}

console.log(solve(['<b>unescaped text</b>', 'normal text']));