function solve(arr) {
    let dis1 = (arr[0] / 3.6) * arr[2];
    let dis2 = (arr[1] / 3.6) * arr[2];
    console.log(Math.abs(dis1 - dis2).toFixed(0));
}
solve([0, 60, 3600]);