function primeNums(num) {
    let n = Math.ceil(Math.sqrt(num));

    if (num < 2) {
        return "false";
    }

    for (var i = 2; i <= n; i++) {
        if (num == i) {
            continue;
        }
        if (num % i == 0) {
            return "false";
        }
    }
    return "true";
}
console.log(primeNums(6));
console.log(primeNums(2));
console.log(primeNums(4));
console.log(primeNums(5));