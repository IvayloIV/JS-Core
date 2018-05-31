function solve(arr) {
    let pattern = /www\.[A-Za-z0-9-]+(?:\.[a-z]+)+/g;
    let result = [];
    for (let element of arr) {
        let exec = pattern.exec(element);
        while (exec){
            result.push(exec[0]);
            exec = pattern.exec(element);
        }
    }
    console.log(result.join('\n'));
}
solve([`Join WebStars now for free, at www.web-stars.com`,
`You can also support our partners:`,
`Internet - www.internet.com`,
`WebSpiders - www.webspiders101.com`,
`Sentinel - www.sentinel.-ko `]);