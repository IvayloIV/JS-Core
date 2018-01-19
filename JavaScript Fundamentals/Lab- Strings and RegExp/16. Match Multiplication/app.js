function matchMultiplication(str) {
    let regex = /(\-?[0-9]+)\s*\*\s*((?:\-?[0-9]+)(?:\.[0-9]+)?)/g;

    let findingElem = regex.exec(str);
    while (findingElem != null) {
        str = str.replace(findingElem[0], callBack(findingElem[1], findingElem[2]));
        findingElem = regex.exec(str);
    }
    console.log(str);

    function callBack(num1, num2) {
        let n1 = Number(num1.trim());
        let n2 = Number(num2.trim());
        return n1 * n2;
    }
}

function matchMultiplication2(str) {
    let regex = /(\-?[0-9]+)\s*\*\s*((?:\-?[0-9]+)(?:\.[0-9]+)?)/g;
    str = str.replace(regex, (match, num1, num2) => Number(num1) * Number(num2));
    console.log(str);
}
matchMultiplication2(`My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).`);