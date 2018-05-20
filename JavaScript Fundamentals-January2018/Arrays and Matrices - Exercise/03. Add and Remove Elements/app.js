function addAndRemove(arr) {
    let newArr = new Array();

    for (var i = 1; i <= arr.length; i++) {
        if (arr[i - 1] == "add") {
            newArr.push(i);
        } else {
            newArr.pop();
        }
    }
    if (newArr.length == 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join('\n'));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);