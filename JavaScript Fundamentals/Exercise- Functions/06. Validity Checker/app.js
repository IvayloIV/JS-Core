function validityChecker(arr) {
    let [x1, y1, x2, y2] = arr;

    function CalculateDistance(x1, y1, x2, y2) {
        let c = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

        if (c == Math.round(c)) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }

    }

    console.log(CalculateDistance(x1, y1, 0, 0));
    console.log(CalculateDistance(x2, y2, 0, 0));
    console.log(CalculateDistance(x1, y1, x2, y2));
}
validityChecker([3, 0, 0, 4]);