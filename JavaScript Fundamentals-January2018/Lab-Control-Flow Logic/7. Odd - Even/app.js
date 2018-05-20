function oddEven(num) {
    let n = num % 2;

    if (n == 0) {
        console.log("even");
    } else if (n == Math.round(n)) {
        console.log("odd");
    } else {
        console.log("invalid");
    }
}
oddEven(5);
oddEven(3);
oddEven(2.4);
oddEven(2);