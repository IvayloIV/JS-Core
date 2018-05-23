function solve(arr) {
    let [x1, y1, x2, y2, x3, y3] = arr;
    let calculateArea = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    function findDistance(ab, ba, ac) {
        if (ab <= ac && ac >= ba){
            return `1->2->3: ${ab + ba}`;
        } else if (ab <= ba && ba > ac){
            return `2->1->3: ${ab + ac}`;
        } else {
            return `1->3->2: ${ba + ac}`;
        }
    }

    let areaAB = calculateArea(x1, y1, x2, y2);
    let areaBA = calculateArea(x2, y2, x3, y3);
    let areaCA = calculateArea(x1, y1, x3, y3);

    console.log(findDistance(areaAB, areaBA, areaCA));
}
solve([0, 0, 2, 0, 4, 0]);