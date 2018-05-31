function solve(arr) {
    let result = [];
    let pattern = /([0-9]+)/g;
    for (let element of arr) {
        let exec = pattern.exec(element);
        while (exec){
            result.push(exec[1]);
            exec = pattern.exec(element)
        }
    }
    console.log(result.join(' '));
}
solve([`The300`,
`What is that?`,
`I think it’s the 3rd movie.`,
`Lets watch it at 22:45`]);