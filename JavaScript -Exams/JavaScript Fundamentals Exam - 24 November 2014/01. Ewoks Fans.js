function solve(arr) {
    let minDate = new Date("January 1, 1900");
    let maxDate = new Date("January 1, 2015");

    let fan = new Date("January 1, 1900");
    let hate = new Date("January 1, 2015");

    let middleYear = new Date("May 25, 1973");
    let countFan = 0;
    let countHate = 0;
    for(let data of arr){
        let dataTokens = data.split('.').filter(a => a != "").map(Number);
        let curretData = new Date(dataTokens[2], dataTokens[1] - 1, dataTokens[0]);
        if (curretData <= minDate || curretData >= maxDate){
            continue;
        }
        if (curretData > middleYear && curretData > fan){
            fan = curretData;
            countFan++;
        } else if (curretData < middleYear && curretData < hate){
            hate = curretData;
            countHate++;
        }
    }
    if (countFan == 0 && countHate == 0){
        console.log(`No result`);
    } else {
        if (countFan != 0){
        console.log(`The biggest fan of ewoks was born on ${fan.toDateString()}`);
        }
        if (countHate != 0){
        console.log(`The biggest hater of ewoks was born on ${hate.toDateString()}`);
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