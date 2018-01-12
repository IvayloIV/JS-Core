function tripLenght(arr) {
    let CalculateDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1- y2, 2))

    function CalculateABC(pointAB, pointBC, pointAC) {
        if (pointAB <= pointAC && pointAC >= pointBC) {
            return `1->2->3: ${pointAB + pointBC}`;
        } else if (pointAB <= pointBC && pointBC > pointAC) {
            return `2->1->3: ${pointAB + pointAC}`;
        } else {
            return `1->3->2: ${pointBC + pointAC}`;
        }
    }

    let [x1, y1, x2, y2, x3, y3] = arr;

    let pointAB = CalculateDistance(x1, y1, x2, y2);
    let pointBC = CalculateDistance(x2, y2, x3, y3);
    let pointAC = CalculateDistance(x1, y1, x3, y3);

    let abc = CalculateABC(pointAB, pointBC, pointAC);
    console.log(abc);
}
tripLenght([5, 1, 1, 1, 5, 4]);