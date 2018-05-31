function solve(arr) {
    arr = arr.filter(a => a !== '');
    let middleDate = new Date(1973, 4, 25);
    let startDate = new Date(1900, 0, 1);
    let endDate = new Date(2015, 0, 1);
    let oldFan, youngFan;
    for (let arrElement of arr) {
        let [day, month, year] = arrElement.split('.').map(Number);
        let currentDate = new Date(year, month - 1, day);
        if (currentDate <= startDate || currentDate >= endDate){
            continue;
        }
        if (currentDate >= middleDate){
            if (youngFan === undefined || currentDate > youngFan){
                youngFan = currentDate;
            }
        } else {
            if (oldFan === undefined || currentDate < oldFan){
                oldFan = currentDate;
            }
        }
    }
    if (oldFan === undefined && youngFan === undefined){
        console.log(`No result`);
    } else {
        if (youngFan !== undefined){
            console.log(`The biggest fan of ewoks was born on ${youngFan.toDateString()}`);
        }
        if (oldFan !== undefined){
            console.log(`The biggest hater of ewoks was born on ${oldFan.toDateString()}`);
        }
    }
}
solve([`10.10.1566`,
`10.10.1966`,
`10.10.1967`,
`10.10.1968`,
`10.10.1969`,
`10.10.1970`,
`10.10.1971`,
`11.11.2006`,
`11.11.2007`,
`11.11.2008`,
`11.11.2009`,
`11.11.2010`,
`11.11.2011`,
`11.11.2012`]);