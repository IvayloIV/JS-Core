function increasingArray(arr) {
    let newArr = new Array();
    newArr.push(arr.shift());

    AddElements(arr, newArr);

    function AddElements(arr, newArr) {
        for (let current of arr) {
            if (current >= newArr[newArr.length - 1]) {
                newArr.push(current);
            }
        }
        PrintResult(newArr);
    }

    function PrintResult(newArr) {
        console.log(newArr.join('\n'));
    }
}

increasingArray([1, 2, 3, 4, 50, 2, 4, 5]);