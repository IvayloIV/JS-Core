function solve(arr) {
    console.log(arr.sort(mySort).join('\n'));

    function mySort(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a.length !== b.length){
            return a.length - b.length;
        }
        if (a < b){
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }
}
solve([`alpha`,
`beta`,
`gamma`]);