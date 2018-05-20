function solve(text) {
    return text.toUpperCase().split(/\W+/).filter(a => a !== '').join(', ');
}

console.log(solve('Hi, how are you?'));