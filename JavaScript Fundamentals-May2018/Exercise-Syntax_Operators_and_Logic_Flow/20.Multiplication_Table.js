function solve(n) {
    let result = `<table border="1">\n<tr>`;
    for (let i = 0; i <= n; i++) {
        let currentNum = i;
        if (currentNum === 0){
            result += `<th>x</th>`;
        } else {
            result += `<th>${i}</th>`;
        }
    }
    result += `</tr>\n`;
    for (let row = 1; row <= n; row++) {
        result += `<tr>`;
        for (let cow = 0; cow <= n; cow++) {
            if (cow === 0){
                result += `<th>${row}</th>`;
            } else {
                result += `<td>${cow * row}</td>`;
            }
        }
        result += `</tr>\n`;
    }
    result += `</table>`;
    console.log(result);
}
solve(5);