function solve(arr) {
    let book = new Map();

    for (let element of arr) {
        let elementTokens = element.split("-").filter(a => a != "");
        let name = elementTokens[0].trim();
        let tokensMore = elementTokens[1].split(":").filter(a => a != "");
        let exam = tokensMore[0].trim();
        let result = Number(tokensMore[1].trim());

        if (result < 0 || result > 400){
            continue;
        }

        if (!book.has(exam)){
            book.set(exam, new Map());
        }
        if (!book.get(exam).has(name)){
            book.get(exam).set(name, [0, 0]);
        }
        else{
            book.get(exam).set(name, [book.get(exam).get(name)[0], book.get(exam).get(name)[1] + 1]);
        }

        let resultDate = book.get(exam).get(name)[0];
        let examRes = book.get(exam).get(name)[1];
        if (resultDate < result){
            book.get(exam).set(name, [result, examRes]);
        }       
    }

    let obj = {};
    for (let parm of [...book]) {
        let key = parm[0];
        obj[key] = [];
        let currentStatus = [...book.get(key)];
        if (currentStatus.length <= 1){
            let currentMap = [...parm[1]][0];
            obj[key].push({"name":currentMap[0], "result":currentMap[1][0], "makeUpExams":currentMap[1][1]});
            continue;
        }
        let sortIt = currentStatus.sort(mySort);
        for (let currentKey of sortIt) {
            let currentObj = {"name":currentKey[0], "result":currentKey[1][0], "makeUpExams":currentKey[1][1]};
            obj[key].push(currentObj);
        }
    }
    console.log(JSON.stringify(obj));

    function mySort(a, b){
        let resultA = a[1];
        let resultB = b[1];

        if (resultA[0] < resultB[0]){
            return 1;
        } else if (resultA[0] > resultB[0]){
            return -1;
        } else {
            if (resultA[1] < resultB[1]){
                return -1;
            } else if (resultA[1] > resultB[1]){
                return 1;
            } else {
                return a[0].localeCompare(b[0]);
            }
        }
    }
}
solve([
    `Simon Cowell - PHP : 100`,
    `Simon Cowell-PHP: 500`,
    `Peter Jackson - PHP: 350`,
    `Simon Cowell - PHP : 400`
    ]);