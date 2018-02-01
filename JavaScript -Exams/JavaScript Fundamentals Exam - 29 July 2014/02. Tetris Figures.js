function solve(totalMatrix) {
    let matrix = [];
    totalMatrix.filter(a => a != '').forEach(a => matrix.push(a.split('').filter(a => a != '')));
    let iFigure = [
        ['o'],
        ['o'],
        ['o'],
        ['o']
    ];
    let lFigure = [
        ['o','-'],
        ['o','-'],
        ['o','o']
    ];
    let jFigure = [
        ['-','o'],
        ['-','o'],
        ['o','o']
    ];
    let oFigure = [
        ['o','o'],
        ['o','o']
    ];
    let zFigure = [
        ['o','o', '-'],
        ['-','o', 'o']
    ];
    let sFigure = [
        ['-','o', 'o'],
        ['o','o', '-']
    ];
    let tFigure = [
        ['o','o', 'o'],
        ['-','o', '-']
    ];
    let obj = {
        'I' : GetRepeatFigureInMatrix(iFigure),
        'L' : GetRepeatFigureInMatrix(lFigure),
        'J' : GetRepeatFigureInMatrix(jFigure),
        'O' : GetRepeatFigureInMatrix(oFigure),
        'Z' : GetRepeatFigureInMatrix(zFigure),
        'S' : GetRepeatFigureInMatrix(sFigure),
        'T' : GetRepeatFigureInMatrix(tFigure)
    };
    console.log(JSON.stringify(obj));

    function GetRepeatFigureInMatrix(currentFigure){
        let count = 0;
        for(let row = 0; row < matrix.length; row++){
            for(let cow = 0; cow < matrix[row].length; cow++){
                if (isCreateFigure(row, cow, currentFigure)){
                    count++;
                }
            }
        }
        return count;
    }

    function isCreateFigure(row, cow, currentFigure) {
        for(let figureRow = 0; figureRow < currentFigure.length; figureRow++){
            for(let figureCow = 0; figureCow < currentFigure[figureRow].length; figureCow++){
                if (!isInside(figureRow, figureCow, row, cow))
                {
                    return false;
                }
                if (currentFigure[figureRow][figureCow] === "-"){
                    continue;
                }
                let curretMatrix = matrix[row + figureRow][cow + figureCow];
                let currentFigure1 = currentFigure[figureRow][figureCow];
                let prob = figureCow;
                if (matrix[row + figureRow][cow + figureCow] !== currentFigure[figureRow][figureCow])
                {
                    return false;
                }
            }
        }
        return true;
    }
    function isInside(figureRow, figureCow, row, cow) {
        return  figureRow + row <= matrix.length - 1 && figureCow + cow <= matrix[0].length - 1;
    }
}
solve([`-oo`,
`ooo`,
`ooo`]);