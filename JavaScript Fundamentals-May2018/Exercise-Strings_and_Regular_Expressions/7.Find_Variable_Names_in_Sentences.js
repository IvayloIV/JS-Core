function solve(str) {
    let pattern = /\b_([A-Za-z0-9]+)\b/g;
    let result = [];
    let exec = pattern.exec(str);
    while (exec){
        result.push(exec[1]);
        exec = pattern.exec(str);
    }
    console.log(result.join(','));
}

solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');