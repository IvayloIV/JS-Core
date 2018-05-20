function posNegative(arr) {
    let newArr = new Array();

    arr.forEach(a => a < 0 ? newArr.unshift(a) : newArr.push(a));
    return newArr.join('\n');
}
console.log(posNegative([7, -2, 8, 9]));