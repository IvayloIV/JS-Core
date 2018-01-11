function interest(arr) {
    let [p, i, n, t] = arr;
    i /= 100;
    n = 12 / n;
    let f = p * Math.pow(1 + (i / n), (n * t));
    console.log(f.toFixed(2));
}
interest([1500, 4.3, 3, 6]);