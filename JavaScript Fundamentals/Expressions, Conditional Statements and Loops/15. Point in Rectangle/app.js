function pointInRectangle(arr) {
    let [x, y, xMin, xMax, yMin, yMax] = arr;
    if (x < xMin || x > xMax || y < yMin || y > yMax) {
        console.log("outside");
    }
    else {
        console.log("inside");
    }
}
pointInRectangle([8, -1, 2, 12, -3, 3]);