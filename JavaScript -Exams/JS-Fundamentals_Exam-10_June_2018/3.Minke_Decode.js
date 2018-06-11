function solve(arr) {
    let startPoint = Number(arr.shift());
    let endPoint = Number(arr.shift());
    let replaceWords = arr.shift();
    let text = arr.shift();

    let patternCountry = /([A-Z][A-Za-z]+[A-Z])/g;
    let totalCountry = patternCountry.exec(text)[0];
    let leftPart = totalCountry.substring(0, startPoint);
    let rightPart = totalCountry.substring(endPoint + 1);
    let townByWord = leftPart + replaceWords + rightPart;

    let decodePattern = /[0-9]{3}(?:\.[0-9]+)?/g;
    let townByNumber = '';
    let matchedNums = decodePattern.exec(text);
    while (matchedNums !== null) {
        townByNumber += String.fromCharCode(Math.ceil(Number(matchedNums[0])));
        matchedNums = decodePattern.exec(text);
    }

    console.log(`${townByWord.substring(0, townByWord.length - 1)}${townByWord.substr(-1).toLowerCase()} => ${townByNumber.substring(0, 1).toUpperCase()}${townByNumber.substring(1)}`);
}

solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);