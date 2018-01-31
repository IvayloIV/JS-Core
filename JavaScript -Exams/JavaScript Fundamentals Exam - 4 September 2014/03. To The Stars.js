function solve(arr) {
    let stars = new Map();
    for(let i = 0; i < 3; i++){
        let currentStarTokens = arr[i].split(/\s+/g).filter(a => a != '');
        let name = currentStarTokens[0];
        let x = Number(currentStarTokens[1]);
        let y = Number(currentStarTokens[2]);
        stars.set([name], {'xMin' : x - 1, 'xMax' : x + 1, 'yMin' : y - 1, 'yMax' : y + 1});
    }
    let myStarPositionTokens = arr[3].split(' ').map(Number);
    let myStar = {'x':myStarPositionTokens[0], 'y':myStarPositionTokens[1]};
    let moves = Number(arr[4]);
    for(let i = 0; i <= moves; i++){
        let isInSpace = true;
        for(let currentStar of [...stars]){
            let startName = currentStar[0][0].toLowerCase();
            let positions = currentStar[1];
            if (isInside(myStar, positions)){
                console.log(startName);
                isInSpace = false;
                break;
            }
        }
        if (isInSpace){
            console.log(`space`);
        }
        myStar['y']++;
    }

    function isInside(myStar, positions) {
        return myStar['x'] >= positions['xMin'] && myStar['x'] <= positions['xMax'] && 
        myStar['y'] >= positions['yMin'] && myStar['y'] <= positions['yMax'];
    }
}
solve([`Terra-Nova 16 2`,
`Perseus 2.6 4.8`,
`Virgo 1.6 7`,
`2 5`,
`4
`]);