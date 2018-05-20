function solve([day, month, year]) {
    let data = new Date(year, month - 1, 0);
    console.log(data.getDate());
}
solve([17, 3, 2002]);