function solve(arr) {
    arr = arr[0].split(/[()\s]+/).filter(a => a !== '').map(Number);
    let maxSql = [];
    let currentSql = [];
    let typeOfNum = null;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let currentType = defineType(currentNum);
        if (typeOfNum === null && currentNum === 0){
            typeOfNum = null;
            currentSql.push(currentNum);
        } else if (typeOfNum === null){
            typeOfNum = currentType;
            currentSql.push(currentNum);
        } else if (currentNum === 0){
            currentSql.push(currentNum);
            typeOfNum = typeOfNum === 'Odd' ? 'Even' : 'Odd';
        } else if (typeOfNum !== currentType){
            typeOfNum = currentType;
            currentSql.push(currentNum);
        } else {
            currentSql = [currentNum];
            typeOfNum = currentType;
        }

        if (maxSql.length < currentSql.length){
            maxSql = [];
            for (let j = 0; j < currentSql.length; j++) {
                maxSql.push(currentSql[j]);
            }
        }
    }

    console.log(maxSql.length);
    function defineType(currentNum) {
        return Math.abs(currentNum) % 2 === 0 ? 'Even' : 'Odd';
    }
}
solve([`  ( 2 )  ( 33 ) (1) (4)   (  -1  ) `]);