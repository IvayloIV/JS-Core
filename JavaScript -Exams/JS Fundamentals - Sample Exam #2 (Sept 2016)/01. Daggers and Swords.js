function solve(arr) {
    let html = `<table border="1">\n`;
    html += `<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n`;
    html += `<tbody>\n`;
    arr = arr.filter(a => a != "");
    for(let element of arr){
        let num = Math.floor(Number(element));
        if (num <= 10){
            continue;
        } 
        html += `<tr><td>${num}</td>`;
        let type = "";
        if (num > 40){
            type = "sword";
        } else {
            type = "dagger";
        }
        html += `<td>${type}</td>`;
        let currentTypeofknife = "";
        if (num % 5 == 1){
            currentTypeofknife = "blade";
        } else if (num % 5 == 2){
            currentTypeofknife = 'quite a blade';
        } else if (num % 5 == 3){
            currentTypeofknife = 'pants-scraper';
        } else if (num % 5 == 4){
            currentTypeofknife = 'frog-butcher';
        } else if (num % 5 == 0){
            currentTypeofknife = '*rap-poker';
        }
        html += `<td>${currentTypeofknife}</td></tr>\n`;
    }
    html += `</tbody>\n</table>`;
    console.log(html);
}
solve([`17.8`,
`19.4`,
`13`,
`55.8`,
`126.96541651`,
`3`]);