function solve(arr) {
    arr = arr.filter(a => a !== '');
    let decodeStr = arr.pop();
    let patternDecode = /([0-9])([A-Za-z])/g;
    let allMatches = decodeStr.match(patternDecode);
    let patternMethod = /^Method:\s(GET|POST|PUT|DELETE)$/;
    let patternCredentials = /^Credentials:\s(Basic|Bearer)\s([A-Za-z0-9]+)$/;
    let patternContent = /^Content:\s([A-Za-z0-9.]+)$/;
    for (let i = 0; i < arr.length; i += 3) {
        let method = arr[i];
        let credentials = arr[i + 1];
        let content = arr[i + 2];

        let findMethod = patternMethod.exec(method);
        let findCredentials = patternCredentials.exec(credentials);
        let findContent = patternContent.exec(content);

        if (findMethod === null || findCredentials === null || findContent === null){
            console.log(`Response-Code:400`);
            continue;
        }
        let cureentMethod = findMethod[1];
        let cureentCredentialsFirst = findCredentials[1];
        let cureentCredentialsSecond = findCredentials[2];
        let cureentContent = findContent[1];

        if (cureentCredentialsFirst === 'Basic' && cureentMethod !== 'GET'){
            console.log(`Response-Method:${cureentMethod}&Code:401`);
            continue;
        }

        let isValid = false;
        for (let el of allMatches) {
            let num = Number(el[0]);
            let currentChar = el[1];

            let momentCount = 0;
            for (let j = 0; j < cureentCredentialsSecond.length; j++) {
                if (cureentCredentialsSecond[j] === currentChar){
                    momentCount++;
                }
            }
            if (num === momentCount){
                isValid = true;
                break;
            }
        }

        if (!isValid){
            console.log(`Response-Method:${cureentMethod}&Code:403`);
            continue;
        }
        console.log(`Response-Method:${cureentMethod}&Code:200&Header:${cureentCredentialsSecond}`);
    }
}
solve([`Method: PUT`,
`Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB`,
`Content: users.asd/1782452$278///**asd123`,
`Method: POST`,
`Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas`,
`Content: Johnathan`,
`Method: DELETE`,
`Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx`,
`Content: This.is.a.sample.content`,
`2e5g`]);