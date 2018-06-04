function solve(arr) {
    arr = arr.map(a => JSON.parse(a).sort((a, b) => b - a));
    let book = new Map();
    for (let i = 0; i < arr.length; i++) {
        let currentArrSum = arr[i].reduce((a, b) => a + b);
        if (!book.has(currentArrSum)){
            book.set(currentArrSum, arr[i]);
        }
    }

    for (let elements of [...book].sort(sortArrs)) {
        console.log(`[${elements[1].join(', ')}]`);
    }

    function sortArrs(a ,b) {
        return a[1].length - b[1].length;
    }
}

solve([`[7.14, 7.180, 7.339, 80.099]`,
`[7.339, 80.0990, 7.140000, 7.18]`,
`[7.339, 7.180, 7.14, 80.099]`]);