function solve(arr) {
    let pattern = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([A-Za-z0-9-\s]+)$/;
    for (let arrElement of arr) {
        let mathes = pattern.exec(arrElement);
        if (mathes){
            console.log(`Name: ${mathes[1]}`);
            console.log(`Position: ${mathes[3]}`);
            console.log(`Salary: ${mathes[2]}`);
        }
    }
}
solve(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']
);