function solve(arr) {
    arr = arr.filter(a => a !== '');
    let firstRow = arr.shift();
    let secondRow = arr.shift();
    let lastRow = arr.pop();

    arr = arr.sort(mySort);

    arr.unshift(secondRow);
    arr.unshift(firstRow);
    arr.push(lastRow);
    console.log(arr.join('\n'));
    function mySort(a, b) {
        let firstMatch = /<tr><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/.exec(a);
        let secondMatch = /<tr><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/.exec(b);
        let firstPrice = Number(firstMatch[2]);
        let secondPrice = Number(secondMatch[2]);
        if (firstPrice !== secondPrice) {
            return firstPrice - secondPrice;
        }
        let firstName = firstMatch[1];
        let secondName = secondMatch[1];
        return firstName.localeCompare(secondName);
    }
}

console.log(solve([`<table>`,
    `<tr><th>Product</th><th>Price</th><th>Votes</th></tr>`,
    `<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>`,
    `<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>`,
    `<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>`,
    `<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>`,
    `<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>`,
    `<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>`,
    `</table>`]));