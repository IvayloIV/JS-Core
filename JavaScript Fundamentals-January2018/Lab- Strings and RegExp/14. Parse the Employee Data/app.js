function parseData(arr) {
    for (let e of arr) {
        let findingData = e.match(/^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([A-Za-z0-9 -]+)$/);
        if (findingData != null) {
            console.log(`Name: ${findingData[1]}\nPosition: ${findingData[3]}\nSalary: ${findingData[2]}`);
        }
    }
}
parseData([`Isacc - 1000 - CEO`,
`Ivan - 500 - Employee`,
`Peter - 500 - Employee`]);