function solve(n) {
    let result = `<div class="chessboard">\n`;
    for (let row = 0; row < n; row++) {
        result += `  <div>\n`;
        for (let cow = 0; cow < n; cow++) {
            let color = ((row + cow) % 2 === 0) ? 'black' : 'white';
            result += `    <span class="${color}"></span>\n`;
        }
        result += `  </div>\n`;
    }
    result += `</div>`;
    console.log(result);
}
solve(8);