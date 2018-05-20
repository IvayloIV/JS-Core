function rounding(arr) {
    let [num, r] = arr;
    let del = Math.pow(10, r);
    console.log(Math.round(num * del) / del);
}
rounding([3.1415926535897932384626433832795, 2]);