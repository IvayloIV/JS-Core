function lastKNums(n, takeNums) {
    let newArr = new Array();
    newArr.push(1);

    for (var i = 1; i < n; i++) {
        let start = i - takeNums;
        if (start < 0) {
            start = 0;
        }
        let elements = newArr.slice(start, i);

        newArr.push(elements.reduce((a, b) => a + b));
    }
    console.log(newArr.join(' '));
}
lastKNums(12, 3);