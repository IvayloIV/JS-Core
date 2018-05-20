function extractLinks(arr) {
    let pattern = /(www\.[A-Za-z0-9\-]+(?:\.[a-z]+)+)/g;
    for (let e of arr) {
        let isValid = pattern.exec(e);      
        while(isValid != null) {
            console.log(isValid[1]);
            isValid = pattern.exec(e);
        }
    }
}
extractLinks([`Join WebStars now for free, at www.web-stars.com`,
`You can also support our partners:`,                            
`Internet - www.internet.com`,                                   
`WebSpiders - www.webspiders101.com`,                            
`Sentinel - www.sentinel.-ko`]);                                 