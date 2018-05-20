function solve(num1, num2, operand) {
    let func = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '/' : (a, b) => a / b,
        '*' : (a, b) => a * b,
    };
    return func[operand](num1, num2);
}

console.log(solve(2, 4, '+'));