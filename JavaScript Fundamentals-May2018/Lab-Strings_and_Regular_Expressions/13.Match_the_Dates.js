function solve(arr) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    for (let element of arr) {
        let mathes = pattern.exec(element);
        while (mathes){
            console.log(`${mathes[0]} (Day: ${mathes[1]}, Month: ${mathes[2]}, Year: ${mathes[3]})`);
            mathes = pattern.exec(element);
        }
    }
}
solve(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']
);