function firstLastKNumbers(arr) {
    let n = arr.shift();

    console.log(arr.slice(0, n));
    console.log(arr.slice(arr.length - n, arr.length));
}
firstLastKNumbers([2, 7, 8, 9]);