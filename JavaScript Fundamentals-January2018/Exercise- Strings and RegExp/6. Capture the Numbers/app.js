function captireNum(arr) {
    let regex = /([0-9]+)/g;
    let numArr = [];
    for (let e of arr) {
        let output = regex.exec(e);
        while (output != null) {
            numArr.push(output[1]);
            output = regex.exec(e);
        }
    }
    console.log(numArr.join(' '));
}
captireNum([`The300`,
`What is that?`,
`I think it’s the 3rd movie.`,
`Lets watch it at 22:45`]);