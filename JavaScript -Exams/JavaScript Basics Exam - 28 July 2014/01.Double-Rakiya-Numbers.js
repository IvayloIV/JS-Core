function solve(arr) {
    arr = arr.filter(a => a !== '');
    let start = Number(arr[0]);
    let end = Number(arr[1]);
    let result = '<ul>\n';
    for (let i = start; i <= end; i++) {
        if (isRakiyaNum(i)){
            result += `<li><span class='rakiya'>${i}</span><a href="view.php?id=${i}>View</a></li>\n`;
        } else {
            result += `<li><span class='num'>${i}</span></li>\n`;
        }
    }
    return result += `</ul>`;

    function isRakiyaNum(n) {
        if (n < 1000){
            return false;
        }
        let strN = n.toString();
        for (let i = 0; i < strN.length - 1; i += 1) {
            let currentN = Number(strN[i] + strN[i + 1]);
            for (let j = i + 2; j < strN.length - 1; j += 1) {
                let nextN = Number(strN[j] + strN[j + 1]);
                if (currentN === nextN){
                    return true;
                }
            }
        }
        return false;
    }
}

console.log(solve(['55555', '55560']));