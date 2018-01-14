function printEveryN(arr) {
    let n = Number(arr.pop());

    let newArr = new Array();
    for (var i = 0; i < arr.length; i += n) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join('\n'));
}
printEveryN(['5', '20', '31', '4', '20', '2']);