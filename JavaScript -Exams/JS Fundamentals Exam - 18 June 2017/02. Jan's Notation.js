function solve(arr) {
    let numArr= new Array();
    for (const operand of arr) {
        if (operand == "+" || operand == "-" || operand == "/" || operand == "*"){
            if (numArr.length < 2){
               return console.log(`Error: not enough operands!`);
            }
            let num2 = numArr.pop(numArr.length - 1);
            let num1 = numArr.pop(numArr.length - 2);
            let result = 0;
            switch (operand) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
            }
            numArr.push(result);
        } else {
            numArr.push(operand);
        } 
    }
    if (numArr.length != 1){
        console.log(`Error: too many operands!`);
    }else{
        console.log(numArr[0]);
    }
}
solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
   );
