function solve(arr) {
    let companies = arr.shift();
    let delimeter = arr.shift();
    let allCompanies = companies.split(delimeter).map(a => a.trim()).filter(a => a !== '');
    let valid = [];
    let invalid = [];
    for (let text of arr) {
        text = text.toLowerCase();
        let isValid = true;
        for (let company of allCompanies) {
            if (text.indexOf(company) === -1) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            valid.push(text);
        } else {
            invalid.push(text);
        }
    }
    let countValid = 1;
    let countInValid = 1;
    if (valid.length !== 0) {
        console.log(`ValidSentences`);
        for (let validElement of valid) {
            console.log(`${countValid++}. ${validElement}`);
        }
    }
    if (valid.length !== 0 && invalid.length !== 0) {
        console.log(`==============================`);
    }
    if (invalid.length !== 0) {
        console.log(`InvalidSentences`);
        for (let invalidElement of invalid) {
            console.log(`${countInValid++}. ${invalidElement}`);
        }
    }
}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho  e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]
);