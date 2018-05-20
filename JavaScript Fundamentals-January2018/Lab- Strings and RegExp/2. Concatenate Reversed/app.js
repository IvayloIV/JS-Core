let concatenate = arr => arr.join('').split('').reverse().join('');

function concatenateReverse(arr) {
    let text = arr.join('');
    let splitArr = Array.from(text).reverse();
    console.log(splitArr.join(''));
}

console.log(concatenate(['I', 'am', 'student']));
concatenateReverse(['I', 'am', 'student']);