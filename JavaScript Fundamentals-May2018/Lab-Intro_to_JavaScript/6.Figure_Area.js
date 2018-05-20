function solve(w, h, W, H) {
    let [areaFirst, areaSecond, innerRectArea] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)];
    return areaFirst + areaSecond - innerRectArea;
}

console.log(solve(2, 4, 5, 3));
