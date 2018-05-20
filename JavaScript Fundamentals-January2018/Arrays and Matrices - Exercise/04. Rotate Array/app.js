function rotateRight(arr) {
    let n = Number(arr.pop());

    for (var i = 0; i < n % arr.length; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}
rotateRight([1, 2, 3, 4, 2]);