function solve(a, b, op) {
    let calc = function (a, b, func) { return func(a, b) };

    let add = (a, b) => a + b;
    let subs = (a, b) => a - b;
    let multi = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (op) {
        case '+': return calc(a, b, add);
        case '-': return calc(a, b, subs);
        case '*': return calc(a, b, multi);
        case '/': return calc(a, b, divide);
    }
}
console.log(solve(32, 4, '+'));