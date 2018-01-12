function aggregate(arr) {
    console.log(calculateElements(arr, 0, (a, b) => a + b));
    console.log(calculateElements(arr, 0, (a, b) => a + 1 / b));
    console.log(calculateElements(arr, '', (a, b) => a + b));

    function calculateElements(arr, inp, func){
        let val = inp;
        for (let n of arr) {
            val = func(val, n);
        }
        return val;
    }
}
aggregate([12, 20, 30]);