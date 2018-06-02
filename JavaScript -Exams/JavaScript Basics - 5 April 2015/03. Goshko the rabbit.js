function solve(arr) {
    arr = arr.filter(a => a !== '');
    let directions = arr.shift().split(', ');
    let matrix = arr.map(a => a.split(', '));
    let totalDirections = {
        left : {x: 0, y : -1},
        right : {x: 0, y : 1},
        up : {x: -1, y : 0},
        down : {x: 1, y : 0}
    };
    let row = 0;
    let cow = 0;
    let fruits = {"&":0,"*":0,"#":0,"!":0,"wall hits":0};
    let result = [];
    for (let direction of directions) {
        if (isInside(row + totalDirections[direction].x, cow + totalDirections[direction].y)){
            row += totalDirections[direction].x;
            cow += totalDirections[direction].y;
            eatFruits();
        } else {
            fruits['wall hits']++;
        }
    }

    console.log(JSON.stringify(fruits));
    console.log(result.length === 0 ? 'no' : result.join('|'));

    function eatFruits() {
        matrix[row][cow] = matrix[row][cow].replace(/{([&*#!])}/g, (g0, g1) => {
            fruits[g1]++;
            return '@';
        });
        result.push(matrix[row][cow]);
    }

    function isInside(row, cow) {
        return row >= 0
            && cow >= 0
            && row < matrix.length
            && cow < matrix[row].length;
    }
}
solve([ 'up, right, left, down',
'as{!}xnk' ]);