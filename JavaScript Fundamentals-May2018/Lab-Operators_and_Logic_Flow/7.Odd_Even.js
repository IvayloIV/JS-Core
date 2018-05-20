function solve(n) {
    if (n % 1 !== 0){
        console.log(`invalid`);
    } else if (n % 2 === 0){
        console.log(`even`);
    }else {
        console.log(`odd`);
    }
}
solve(1.3);
solve(2);
solve(3);